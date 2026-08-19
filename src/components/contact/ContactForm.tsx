"use client";

import { FormEvent, useState } from "react";
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
            className="border border-line bg-bg-elevated/70 px-6 py-10"
          >
            <p className="font-display text-2xl text-ink">{contact.success}</p>
            <button
              type="button"
              className="mt-6 text-sm text-accent hover:underline"
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
            className="grid gap-5"
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
              <span className="text-sm text-ink">How we might work</span>
              <select
                className="mt-2 w-full border border-line bg-bg-elevated px-3 py-3 text-sm text-ink outline-none focus:border-accent"
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
              <span className="text-sm text-ink">Message</span>
              <textarea
                required
                rows={6}
                className="mt-2 w-full resize-y border border-line bg-bg-elevated px-3 py-3 text-sm text-ink outline-none focus:border-accent"
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
              className="justify-self-start rounded-sm bg-ink px-5 py-3 text-sm text-bg transition hover:bg-accent disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
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
      <span className="text-sm text-ink">{label}</span>
      <input
        type={type}
        required={required}
        className="mt-2 w-full border border-line bg-bg-elevated px-3 py-3 text-sm text-ink outline-none focus:border-accent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
