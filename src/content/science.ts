export const science = {
  meta: {
    title: "The Science",
    description:
      "AI in healthcare, data in healthcare, device R&D, and early detection — fields of inquiry for the cancer ecosystem.",
  },
  eyebrow: "The science",
  title: "Intelligence built for the cancer ecosystem",
  lead: "We do not start from a catalogue. We start from four bodies of work that have to function together: how machines read clinical signal, how data becomes the next decision, how devices can leave the hospital, and how cancer is found while there is still time.",
  note: "These are named plainly — AI in healthcare, data in healthcare, device R&D, early detection. They are fields of inquiry, not SKUs.",
  sections: [
    {
      id: "ai",
      title: "AI in healthcare",
      paragraphs: [
        "Machine intelligence here is not a feature list. It is how a visit that lasts minutes can still be clinically serious: reading panels, ranking risk, and putting a usable signal in front of a clinician who is not sitting in a tertiary centre.",
        "We train and apply models only where they change a cancer-ecosystem decision — probability of disease, urgency of referral, interpretation of a portable panel — and only when they can be explained to the person who must act.",
        "What we will not do on this page: name a black-box “AI product,” or invite the public to be screened by an algorithm.",
      ],
    },
    {
      id: "data",
      title: "Data in healthcare",
      paragraphs: [
        "Cancer care fails in the gaps between visits. Data, for us, is the tissue that should connect a finding in a small clinic to the next clinician, the nutrition team, and the programme that has to follow the person.",
        "We care about what is collected, how it is collected, and what decision it is for. Longitudinal, privacy-disciplined, useful at the bedside. Not data for its own sake, and not a claim that we run a consumer health app as the brand.",
      ],
    },
    {
      id: "devices",
      title: "Device R&D",
      paragraphs: [
        "Hospital-grade signal is of little use if it can only exist in a hospital. Device research at HealthVoitho is the problem of portability with integrity: panels that travel, results in seconds to minutes, cost that does not exile the technology to a few cities.",
        "A pathway we have already taken into the field returns on the order of a hundred parameters — including lung function, a 12-lead hospital-grade ECG, and a set of direct cancer markers — with results from about twenty seconds to fifteen minutes. We describe that here as what the science is for, not as a model number in a shop.",
        "If a device is discontinued next season, the scientific question remains. That is why this site is not a product grid.",
      ],
    },
    {
      id: "early-detection",
      title: "Early detection",
      paragraphs: [
        "The work is proactive: estimate the probability of cancer (and of the NCDs that travel with it) while people are still living their lives — including when they do not yet know anything is wrong.",
        "Early detection is not a service we sell to the public on this website. It is the scientific target that AI, data, and devices are aimed at.",
      ],
    },
  ],
} as const;
