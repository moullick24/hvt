import type { Metadata } from "next";
import { CancerFacts } from "@/components/home/CancerFacts";
import { ContourLines } from "@/components/home/ContourLines";
import { Hero } from "@/components/home/Hero";
import { NameOrigin } from "@/components/home/NameOrigin";
import { ProgressCards } from "@/components/home/ProgressCards";
import { ScienceOverview } from "@/components/home/ScienceOverview";
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
      <div className="home-motion-field relative isolate -mt-[5rem] overflow-hidden bg-white pt-[5rem] sm:-mt-[5.5rem] sm:pt-[5.5rem]">
        <ContourLines />
        <Hero />
        <CancerFacts />
      </div>
      <ScienceOverview />
      <NameOrigin />
      <ProgressCards />
    </>
  );
}
