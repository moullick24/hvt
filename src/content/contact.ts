export const contact = {
  meta: {
    title: "Contact",
    description:
      "Write to HealthVoitho if you are building in the cancer ecosystem — scientists, clinicians, medtech teams, and institutions.",
  },
  eyebrow: "Write to us",
  title: "If you are building in this ecosystem, we should know each other.",
  lead: "Scientists, clinicians, medtech teams, and institutions — this form reaches us by email. We do not offer consumer screening through this site.",
  success: "Thank you. We will read this.",
  workOptions: [
    { value: "partner", label: "Partner" },
    { value: "acquire", label: "Acquire & operate" },
    { value: "other", label: "Other" },
  ] as const,
} as const;
