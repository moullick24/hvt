export const home = {
  meta: {
    title: {
      absolute: "HealthVoitho — Intelligent healthcare in the cancer ecosystem",
    },
    description:
      "A research-oriented technology organisation in the Esperer Group. We develop intelligent systems for earlier, more accessible cancer care.",
  },
  hero: {
    /** Locked — do not change */
    headline: "Intelligent Healthcare in Cancer Ecosystem. Accessible Everywhere.",
    headlineLines: [
      "Intelligent Healthcare",
      "in Cancer Ecosystem.",
      "Accessible Everywhere.",
    ] as const,
    deck: "We build the intelligence that helps cancer be found earlier, understood sooner, and faced closer to home.",
    primaryCta: { href: "/science", label: "The science" },
    secondaryCta: { href: "/partnerships", label: "Partner with us" },
  },
  progress: {
    eyebrow: "From the science",
    title: "What we are proving in the world",
    cards: [
      {
        category: "Early detection",
        status: "In the field",
        title: "Finding probability before the disease has a stage",
        standfirst:
          "Most cancer systems wait for what is already advanced. We have taken a compact diagnostic pathway into real rooms — a wide clinical picture in minutes. The device is not the story. Time, and where the visit can happen, is.",
        href: "/science",
      },
      {
        category: "The ecosystem",
        status: "Collaboration",
        title: "Saltlick — intelligence inside a full cancer pathway",
        standfirst:
          "Cancer care fails when screening, treatment, and support live in different worlds. Saltlick carries detection through to care. HealthVoitho’s role is the intelligence layer.",
        href: "/partnerships",
      },
      {
        category: "Supportive care",
        status: "In research",
        title: "Cancer pain treated as a scientific problem",
        standfirst:
          "For many people — especially in head and neck disease — pain is the day. We are working on technology for cancer pain that can sit inside the same ecosystem as detection.",
        href: "/science",
      },
    ],
  },
} as const;
