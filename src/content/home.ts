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
    primaryCta: { href: "/science", label: "Science" },
    secondaryCta: { href: "/partnerships", label: "Partner with us" },
  },
  progress: {
    title: "Latest Work",
    cards: [
      {
        title: "A new way to manage pain for cancer patients",
        standfirst:
          "Exploring supportive technologies that treat cancer pain as part of the care pathway, helping patients preserve comfort, movement, and everyday dignity.",
        image: "/media/cancer-pain-cutout-v2.png",
        imageAlt: "Medical illustration showing pain across the neck and upper back",
        href: "/science",
      },
      {
        title: "Cancer care for rural India",
        standfirst:
          "Bringing intelligent pathways closer to underserved communities by connecting local health workers, patients, screening, and clinical expertise.",
        image: "/media/rural-cancer-care-v1.png",
        imageAlt: "An older woman with a community healthcare worker in rural India",
        href: "/partnerships",
      },
      {
        title: "Bringing screening from hospitals to homes",
        standfirst:
          "Designing compact screening experiences that can move beyond specialist facilities, making earlier signals easier to find where people already live.",
        image: "/media/home-screening-device-v1.png",
        imageAlt: "A compact at-home health screening device with a collection wand",
        href: "/science",
      },
    ],
  },
  scienceOverview: {
    titleAccent: "AI",
    title: " + Domain Expertise",
    mechanism:
      "We combine longitudinal oncology data, AI-driven causal modelling and deep domain expertise into solutions our partners use to validate targets, biomarkers and diagnostic pathways before committing capital downstream.",
    pillars: [
      {
        title: "AI-Driven Causal Modelling",
        description:
          "We apply AI/ML and causal inference to real-world oncology data to identify disease targets and patient subtypes, and validate them before a partner commits lab or clinical resources.",
      },
      {
        title: "Longitudinal Oncology Data",
        description:
          "Structured data spanning the full disease journey — not a single snapshot — so every model is grounded in how cancer actually progresses in a population, not just in published literature.",
      },
      {
        title: "Deep Domain Knowledge",
        description:
          "Oncology-specific clinical and scientific expertise embedded at every step, so a partner's R&D or clinical team gets an interpretable output, not a black-box score.",
      },
    ],
    cta: { href: "/science", label: "Explore the science behind it" },
  },
  origin: {
    title: "What’s in a name?",
    firstWord: "Health",
    secondWord: "Voitho",
    definition:
      'HealthVoitho blends the word “Health” with the Greek word “voitho,” which means “to assist.”',
    purpose:
      "We enable scientists, clinicians and institutions to harness the collective wisdom and the power of technology to uncover knowledge for the future of cancer care. We do so to help people everywhere live healthier and happier.",
  },
} as const;
