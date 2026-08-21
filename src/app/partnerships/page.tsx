import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContourLines } from "@/components/home/ContourLines";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { partnerships } from "@/content/partnerships";

export const metadata: Metadata = {
  title: partnerships.meta.title,
  description: partnerships.meta.description,
};

export default function PartnershipsPage() {
  const partner = partnerships.partners[0];

  return (
    <main className="page-header-underlay partnerships-page relative isolate overflow-hidden bg-white">
      <ContourLines />

      <section className="relative z-10 mx-auto max-w-[1536px] px-5 pb-20 pt-20 sm:px-8 md:pb-28 md:pt-28 lg:px-12 lg:pt-36 xl:px-16">
        <FadeIn>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-[#1d315f] md:text-6xl">
            {partnerships.titlePrefix}{" "}
            <span className="partnerships-gradient-text">
              {partnerships.titleAccent}
            </span>{" "}
            {partnerships.titleSuffix}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-muted md:mt-9 md:text-xl">
            {partnerships.lead}
          </p>
        </FadeIn>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1536px] gap-10 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-24 lg:px-12 xl:px-16">
        <FadeIn>
          <h2 className="max-w-xl font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.04] tracking-[-0.03em] text-[#1d315f]">
            {partnerships.discovery.title}
          </h2>
        </FadeIn>
        <FadeIn className="max-w-3xl space-y-7 text-lg leading-[1.72] text-[#42565b]" delay={0.06}>
          {partnerships.discovery.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 44)}>{paragraph}</p>
          ))}
        </FadeIn>
      </section>

      <section className="relative z-10 mx-auto max-w-[1536px] px-5 pb-24 sm:px-8 md:pb-32 lg:px-12 xl:px-16">
        <FadeIn>
          <h2 className="font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.04] tracking-[-0.03em] text-[#1d315f]">
            Our partners
          </h2>
        </FadeIn>

        <FadeIn className="mt-14 md:mt-20">
          <article className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-20">
            <figure className="relative aspect-[16/10] overflow-hidden bg-[#e8efed]">
              <Image
                src={partner.image}
                alt="Illustrative contemporary cancer research institute"
                fill
                sizes="(max-width: 1023px) 100vw, 56vw"
                className="object-cover"
              />
            </figure>

            <div className="max-w-xl">
              <Image
                src={partner.logo}
                alt="Illustrative placeholder logo for Meridian Cancer Research Institute"
                width={132}
                height={132}
                className="h-24 w-24 object-contain md:h-28 md:w-28"
              />
              <h3 className="mt-8 font-display text-3xl leading-tight text-[#1d315f] md:text-4xl">
                {partner.name}
              </h3>
              <p className="mt-6 text-base leading-[1.75] text-[#42565b] md:text-[1.05rem]">
                {partner.description}
              </p>
            </div>
          </article>

          {partner.quote ? (
            <blockquote className="mx-auto mt-16 max-w-5xl text-center md:mt-24">
              <p className="font-display text-[clamp(1.8rem,3vw,3.25rem)] leading-[1.22] tracking-[-0.025em] text-[#1d315f]">
                “{partner.quote}”
              </p>
              <footer className="mt-7 text-sm leading-6 text-[#526468]">
                {partner.quoteAttribution} · illustrative quote
              </footer>
            </blockquote>
          ) : null}
        </FadeIn>
      </section>

      <section className="relative z-10 bg-[#102e3a] text-white">
        <div className="mx-auto max-w-[1536px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
          <FadeIn>
            <h2 className="max-w-2xl font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.04] tracking-[-0.03em] text-white">
              Our partnership principles
            </h2>
          </FadeIn>

          <Stagger className="mt-16 grid border-t border-white/25 md:mt-24 md:grid-cols-4">
            {partnerships.principles.map((principle, index) => (
              <StaggerItem key={principle.id}>
                <article
                  className={`py-10 md:min-h-[330px] md:px-7 md:py-12 lg:px-9 ${
                    index > 0
                      ? "border-t border-white/25 md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  <h3 className="font-display text-3xl leading-tight text-[#b9d6d3] md:text-[2rem]">
                    {principle.title}
                  </h3>
                  <p className="mt-8 text-base leading-7 text-white/72">
                    {principle.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative z-10 bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <FadeIn className="mx-auto max-w-[1280px] text-center">
          <h2 className="mx-auto max-w-5xl font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.08] tracking-[-0.03em] text-[#1d315f]">
            {partnerships.closing.title}
          </h2>
          <Link
            href={partnerships.closing.cta.href}
            className="hero-outline-action group mt-10 inline-flex items-center gap-3 rounded-full border-[1.5px] border-transparent px-7 py-4 text-sm font-semibold sm:text-base"
          >
            {partnerships.closing.cta.label}
            <ArrowRight
              className="h-[1.1rem] w-[1.1rem] transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
