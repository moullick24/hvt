export const partnerships = {
  meta: {
    title: "Partnerships",
    description:
      "Collaborations that place HealthVoitho intelligence inside real cancer pathways — Saltlick and Niq.",
  },
  eyebrow: "Partnerships",
  title: "Hard problems in cancer care are not solved alone",
  lead: "HealthVoitho’s science only matters when it sits inside a real pathway — detection, care, support. We work with organisations that already live in that pathway. Two collaborations are ready to be spoken about in public. Each has its own home; this page is the relationship, not a product tour.",
  partners: [
    {
      id: "saltlick",
      label: "Partner",
      name: "Saltlick",
      detailsTitle: "Details of our collaboration",
      paragraphs: [
        "Saltlick is a cancer-ecosystem effort: a way to take people from identification through care, including where a tertiary campus is far away. HealthVoitho is not “the Saltlick brand.” We are the intelligence in the pathway — portable diagnostics, data that can follow the person, AI where it earns a clinical decision.",
        "The collaboration is bidirectional. The field tells the lab what actually fails. The lab returns systems that can travel. For the working programme, go to Saltlick’s own site. This page will not duplicate it.",
      ],
      weBring:
        "AI, data discipline, and device science that can leave the hospital.",
      theyBring: "Oncology operations, reach, and the last mile of care.",
      href: null as string | null,
      linkLabel: "Visit Saltlick",
    },
    {
      id: "niq",
      label: "Partner",
      name: "Niq",
      detailsTitle: "Details of our collaboration",
      paragraphs: [
        "Niq is a collaboration in progress in the same cancer ecosystem — a defined problem in the pathway, a team we are aligned with, and a site of its own when the work is ready to be used. We will not describe a product here that we are not yet willing to stand behind.",
      ],
      weBring:
        "The same scientific stack — AI, data, devices — applied to Niq’s problem.",
      theyBring: "Domain focus and pathway ownership for a defined cancer-ecosystem problem.",
      href: null as string | null,
      linkLabel: "Visit Niq",
    },
  ],
  principles: [
    {
      title: "Synergy",
      body: "They know the pathway. We know the intelligence. Neither is a vendor to the other.",
    },
    {
      title: "Collaboration",
      body: "Continuous, scientific, in the field as much as on paper.",
    },
    {
      title: "Transfer",
      body: "The point is that the technology can leave us and still be itself.",
    },
    {
      title: "Access",
      body: "If it cannot move beyond a few cities, it is not a partnership we will celebrate on this page.",
    },
  ],
} as const;
