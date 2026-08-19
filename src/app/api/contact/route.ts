import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Contact API — v1 is a validated stub.
 * TODO: send email via Resend/Nodemailer using CONTACT_TO_EMAIL.
 * Swap only inside this route; keep the request shape stable.
 */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  organisation: z.string().trim().min(1, "Organisation is required").max(160),
  role: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email("Valid email is required").max(160),
  workMode: z.enum(["partner", "acquire", "other"]),
  message: z.string().trim().min(1, "Message is required").max(4000),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid form data.";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }

  // Dummy delivery — log in development only. No email is sent yet.
  if (process.env.NODE_ENV === "development") {
    console.info("[contact:dummy]", {
      ...parsed.data,
      // CONTACT_TO_EMAIL would be the destination once email is wired.
      destination: process.env.CONTACT_TO_EMAIL ?? "(unset)",
    });
  }

  return NextResponse.json({ ok: true });
}
