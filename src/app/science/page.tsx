import type { Metadata } from "next";
import { ContourLines } from "@/components/home/ContourLines";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProgressCards } from "@/components/home/ProgressCards";
import { ScienceTimeline } from "@/components/science/ScienceTimeline";
import { science } from "@/content/science";

export const metadata: Metadata = {
  title: science.meta.title,
  description: science.meta.description,
};

export default function SciencePage() {
  return (
    <main className="page-header-underlay science-page relative isolate overflow-hidden bg-white">
      <ContourLines />

      <section className="relative z-10 mx-auto max-w-[1536px] px-5 pb-20 pt-20 sm:px-8 md:pb-28 md:pt-28 lg:px-12 lg:pt-36 xl:px-16">
        <FadeIn>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-[#1d315f] md:text-6xl">
            <span className="science-heading-gradient">{science.titleAccent}</span>{" "}
            {science.titleRest}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-muted md:mt-9 md:text-xl">
            {science.lead}
          </p>
        </FadeIn>
      </section>

      <div className="relative z-10 mx-5 mb-16 h-px bg-[#cfdad8] sm:mx-8 lg:mx-12 lg:mb-24 xl:mx-16" />

      <div className="relative z-10">
        <ScienceTimeline sections={science.sections} />
      </div>

      <div className="relative z-10">
        <ProgressCards />
      </div>
    </main>
  );
}
