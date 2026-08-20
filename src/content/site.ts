export const site = {
  name: "HealthVoitho",
  legalName: "HealthVoitho Technologies",
  group: "Esperer Group",
  tagline: "Intelligent healthcare in the cancer ecosystem.",
  description:
    "A research-oriented technology organisation in the Esperer Group. We develop intelligent systems for earlier, more accessible cancer care.",
  url: "https://www.healthvoitho.com",
} as const;

export const navLinks = [
  { href: "/science", label: "Science" },
  { href: "/approach", label: "Approach" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/people", label: "People" },
  { href: "/group", label: "Group" },
] as const;

export const contactCta = {
  href: "/contact",
  label: "Contact",
} as const;
