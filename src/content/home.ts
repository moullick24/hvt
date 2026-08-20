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
} as const;
