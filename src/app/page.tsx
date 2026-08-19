import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProgressCards } from "@/components/home/ProgressCards";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
  openGraph: {
    title: "HealthVoitho — Intelligent healthcare in the cancer ecosystem",
    description: home.meta.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgressCards />
    </>
  );
}
