import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { people } from "@/content/people";

export const metadata: Metadata = {
  title: people.meta.title,
  description: people.meta.description,
};

export default function PeoplePage() {
  return (
    <div className="atmosphere">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {people.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
            {people.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {people.lead}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted">{people.note}</p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.placeholders.map((person) => (
            <StaggerItem key={person.id}>
              <article className="border border-line bg-bg-elevated/60 p-5">
                <div
                  className="aspect-[4/5] w-full bg-[linear-gradient(160deg,#e4d8c8,#cbb9a4)]"
                  aria-hidden
                />
                <p className="mt-5 font-display text-xl text-ink">
                  {person.label}
                </p>
                <p className="mt-1 text-sm text-muted">{person.role}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10">
          <p className="max-w-xl text-sm text-muted">{people.footerNote}</p>
        </FadeIn>
      </section>
    </div>
  );
}
