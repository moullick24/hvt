import type { Metadata } from "next";
import { CancerFacts } from "@/components/home/CancerFacts";
import { ContourLines } from "@/components/home/ContourLines";
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
      <div className="home-motion-field relative isolate overflow-hidden bg-white">
        <ContourLines />
        <Hero />
        <CancerFacts />
      </div>
      <ProgressCards />
    </>
  );
}
