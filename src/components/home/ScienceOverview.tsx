import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";

export function ScienceOverview() {
  const { scienceOverview } = home;

  return (
    <section className="bg-[#102326] text-white">
      <div className="mx-auto max-w-[1536px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-20">
          <div className="flex w-full justify-center lg:sticky lg:top-28">
            <figure className="relative aspect-square h-auto w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#dceae7] shadow-[0_28px_80px_rgba(0,0,0,0.2)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Microscopy video showing spheroid invasion"
                className="h-full w-full object-cover"
              >
                <source
                  src="https://ibidi.com/img/cms/videos/HT1080_Spheroid_Invasion_409px.mp4"
                  type="video/mp4"
                />
              </video>
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#63b6c4]/10 via-transparent to-[#c3cf95]/15"
                aria-hidden
              />
            </figure>
          </div>

          <div>
            <h2 className="max-w-[780px] font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.04] tracking-[-0.03em] text-white">
              <span className="science-gradient-text">{scienceOverview.titleAccent}</span>
              {scienceOverview.title}
            </h2>
            <p className="mt-7 max-w-[760px] text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              {scienceOverview.mechanism}
            </p>

            <div className="mt-12 border-t border-white/20">
              {scienceOverview.pillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="grid gap-5 border-b border-white/20 py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7"
                >
                  <p className="pt-1 text-xs font-semibold tracking-[0.18em] text-[#9fb7b3]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-display text-[1.075rem] leading-[1.35] tracking-[-0.015em] text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 max-w-[690px] text-[0.95rem] leading-7 text-white/65">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link
              href={scienceOverview.cta.href}
              className="science-outline-action group mt-10 inline-flex w-max items-center gap-3 rounded-full border-[1.5px] border-transparent px-6 py-3.5 text-sm font-semibold sm:text-base"
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              {scienceOverview.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
