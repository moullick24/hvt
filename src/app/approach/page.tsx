import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { approach } from "@/content/approach";

export const metadata: Metadata = {
  title: approach.meta.title,
  description: approach.meta.description,
};

export default function ApproachPage() {
  const { insight, founderNote, collaboration } = approach;

  return (
    <div className="atmosphere">
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 md:px-8 md:pt-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {insight.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl">
            {insight.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14">
          <p className="font-display text-6xl leading-none text-accent md:text-8xl">
            {insight.primary.value}
          </p>
          <p className="mt-4 max-w-xl text-xl text-ink md:text-2xl">
            {insight.primary.label}
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-8 border-y border-line py-10 md:grid-cols-3">
          {insight.supporting.map((stat) => (
            <StaggerItem key={stat.value}>
              <p className="font-display text-4xl text-ink md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          {insight.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="text-xs text-muted/80">{insight.citationNote}</p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <FadeIn>
          <div className="founder-paper mx-auto max-w-3xl px-6 py-10 md:px-12 md:py-14">
            <div className="handwriting space-y-5 text-xl text-ink md:text-2xl">
              {founderNote.paragraphs.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-line/60 pt-6">
              <p className="handwriting text-2xl text-ink">
                {founderNote.signature}
              </p>
              <p className="mt-1 text-sm text-muted">{founderNote.role}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {collaboration.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-5xl">
            {collaboration.title}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {collaboration.models.map((model, i) => (
            <FadeIn key={model.title} delay={i * 0.08}>
              <article className="h-full border border-line bg-bg-elevated/60 p-7">
                <h3 className="font-display text-2xl text-ink">{model.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {model.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10">
          <p className="max-w-2xl text-sm text-muted">{collaboration.footnote}</p>
          <Link
            href={collaboration.cta.href}
            className="mt-6 inline-flex rounded-sm bg-ink px-5 py-3 text-sm text-bg transition hover:bg-accent"
          >
            {collaboration.cta.label}
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
