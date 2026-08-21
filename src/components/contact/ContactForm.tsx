"use client";

import { FormEvent, useState } from "react";
import { Send as SendIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "@/content/contact";

type Status = "idle" | "loading" | "success" | "error";

const initial = {
  name: "",
  organisation: "",
  role: "",
  email: "",
  workMode: "partner",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setValues(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-[1.5rem] bg-[#eff5f3] px-6 py-10 md:px-8"
          >
            <p className="font-display text-2xl text-[#1d315f]">{contact.success}</p>
            <button
              type="button"
              className="mt-6 text-sm font-medium text-[#397d93] hover:underline"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid gap-6"
          >
            <Field
              label="Name"
              required
              value={values.name}
              onChange={(v) => setValues((s) => ({ ...s, name: v }))}
            />
            <Field
              label="Organisation"
              required
              value={values.organisation}
              onChange={(v) => setValues((s) => ({ ...s, organisation: v }))}
            />
            <Field
              label="Role"
              value={values.role}
              onChange={(v) => setValues((s) => ({ ...s, role: v }))}
            />
            <Field
              label="Email"
              type="email"
              required
              value={values.email}
              onChange={(v) => setValues((s) => ({ ...s, email: v }))}
            />

            <label className="block">
              <span className="text-sm font-medium text-[#1d315f]">How we might work</span>
              <select
                className="mt-2.5 w-full rounded-[1rem] border border-[#b9cdcd] bg-white/90 px-4 py-3.5 text-sm text-[#263d43] outline-none transition focus:border-[#468397] focus:ring-4 focus:ring-[#468397]/10"
                value={values.workMode}
                onChange={(e) =>
                  setValues((s) => ({ ...s, workMode: e.target.value }))
                }
              >
                {contact.workOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[#1d315f]">Message</span>
              <textarea
                required
                rows={6}
                className="mt-2.5 w-full resize-y rounded-[1rem] border border-[#b9cdcd] bg-white/90 px-4 py-3.5 text-sm text-[#263d43] outline-none transition placeholder:text-[#708185] focus:border-[#468397] focus:ring-4 focus:ring-[#468397]/10"
                value={values.message}
                onChange={(e) =>
                  setValues((s) => ({ ...s, message: e.target.value }))
                }
              />
            </label>

            {status === "error" ? (
              <p className="text-sm text-accent" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="hero-outline-action group inline-flex items-center gap-3 justify-self-start rounded-full border-[1.5px] border-transparent px-7 py-4 text-sm font-semibold disabled:pointer-events-none disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send"}
              <SendIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[#1d315f]">{label}</span>
      <input
        type={type}
        required={required}
        className="mt-2.5 w-full rounded-[1rem] border border-[#b9cdcd] bg-white/90 px-4 py-3.5 text-sm text-[#263d43] outline-none transition placeholder:text-[#708185] focus:border-[#468397] focus:ring-4 focus:ring-[#468397]/10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
