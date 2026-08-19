export const group = {
  meta: {
    title: "Group",
    description:
      "HealthVoitho within the Esperer Group — oncology science, nutrition research, and dedicated cancer laboratories.",
  },
  eyebrow: "Esperer Group",
  title: "Technology with oncology in its bones",
  lead: "HealthVoitho is one entity in a group that already lives inside cancer care.",
  entities: [
    {
      name: "Esperer Bioresearch",
      description: "Molecules, treatment, oncology science.",
      href: "https://espererbioresearch.com/",
    },
    {
      name: "Esperer Nutrition / ENDC",
      description:
        "Supportive nutritional science, including dedicated cancer-nutrition research.",
      href: "https://esperernutrition.com/",
    },
    {
      name: "Infrastructure",
      description:
        "The operational spine the ecosystem actually needs — so technology is not invented in a vacuum.",
      href: null as string | null,
    },
  ],
  body: [
    "The group maintains dedicated cancer research laboratories in more than one country. Questions from the field go to the bench; findings from the bench become systems that can travel.",
    "Sister concerns are not clients. They are why this is not a generic health-tech shop.",
  ],
  standards: {
    title: "How we are allowed to work",
    lead: "Intelligence that cannot be trusted cannot be transferred. Marks appear only for certifications that are current and named exactly.",
    items: [
      "ISO (exact code to confirm)",
      "FDA / CE pathways where applicable and true for HealthVoitho",
      "DPDP",
      "HIPAA-aligned handling where the architecture requires it",
    ],
  },
} as const;
