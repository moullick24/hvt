export const partnerships = {
  meta: {
    title: "Partnerships",
    description:
      "HealthVoitho partnerships with scientists, research labs, and institutions working to advance early cancer detection and therapy development.",
  },
  titlePrefix: "Ambitious problems demand",
  titleAccent: "collaborators",
  titleSuffix: "who’ve earned the room",
  lead: "Our mission is to close the gap between when cancer can be caught and when it’s actually caught. That’s a bigger problem than any one lab, dataset, or model can solve alone — which is why every serious step we’ve taken has been taken alongside the people closest to the science.",
  discovery: {
    title: "Driving discovery together",
    paragraphs: [
      "Our culture of collaboration extends beyond the walls of our offices and underpins every one of our relationships — whether you’re an independent scientist, a research lab, an academic or clinical institution, or another pioneering partner working on the same problem from a different angle.",
      "Together we are turning causal understanding of cancer biology into evidence that holds up outside a lab. With AI, longitudinal data and deep oncology domain expertise, we are working toward a new standard for early detection and therapy development — one built to reach the people who need it, not just the people near a tertiary centre.",
      "And not a moment too soon.",
    ],
  },
  partners: [
    {
      id: "meridian",
      name: "Meridian Cancer Research Institute",
      logo: "/media/partnerships/meridian-placeholder-mark.svg",
      image: "/media/partnerships/cancer-research-institute-v1.png",
      description:
        "Our collaboration with Meridian Cancer Research Institute began in 2025, applying causal modelling to a shared longitudinal dataset spanning over a decade of treatment outcomes across three cancer types. The work has since expanded to include joint validation of two biomarker candidates identified through the collaboration.",
      quote:
        "Working with a team that treats the causal question as seriously as we do has changed how we approach target selection. We’re finding signal we would have missed working alone.",
      quoteAttribution:
        "Dr. Amara Solanki — Director of Translational Research, Meridian Cancer Research Institute",
    },
  ],
  principles: [
    {
      id: "rigor",
      title: "Rigor",
      body: "A target or biomarker doesn’t earn a partner’s trust because it looks promising — it earns it because it holds up against causal, real-world evidence. We validate before we hand anything downstream, not after.",
    },
    {
      id: "reciprocity",
      title: "Reciprocity",
      body: "A partner’s domain knowledge and data go into every model we build together; our causal modelling and closed-loop validation come back out. It’s an exchange, not a service performed on a partner’s behalf.",
    },
    {
      id: "velocity",
      title: "Velocity",
      body: "Cancer caught early is a different disease than cancer caught late. Every partnership is judged against that clock, not against a publication or funding timeline.",
    },
    {
      id: "reach",
      title: "Reach",
      body: "Validated in a partnership isn’t the same as reaching a patient outside a tertiary centre. Our partnerships exist to close that specific gap — one pathway at a time.",
    },
  ],
  closing: {
    title:
      "If you’re a scientist, a lab, or an institution working on the same problem — we’d like to hear from you.",
    cta: { href: "/contact", label: "Partner with us" },
  },
} as const;
