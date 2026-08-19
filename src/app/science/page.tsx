import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProgressCards } from "@/components/home/ProgressCards";
import { science } from "@/content/science";

export const metadata: Metadata = {
  title: science.meta.title,
  description: science.meta.description,
};

export default function SciencePage() {
  return (
    <div className="atmosphere">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {science.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
            {science.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {science.lead}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {science.note}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-20 md:px-8 md:pb-28">
        {science.sections.map((section, index) => (
          <FadeIn key={section.id} delay={index * 0.05}>
            <article className="grid gap-6 border-t border-line pt-10 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                {section.title}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </section>

      <ProgressCards />
    </div>
  );
}
