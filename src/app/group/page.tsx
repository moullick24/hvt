import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { group } from "@/content/group";

export const metadata: Metadata = {
  title: group.meta.title,
  description: group.meta.description,
};

export default function GroupPage() {
  return (
    <div className="atmosphere">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {group.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
            {group.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {group.lead}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {group.entities.map((entity, i) => (
            <FadeIn key={entity.name} delay={i * 0.06}>
              <article className="h-full border border-line bg-bg-elevated/55 p-6">
                {entity.href ? (
                  <a
                    href={entity.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl text-ink hover:text-accent"
                  >
                    {entity.name}
                  </a>
                ) : (
                  <h2 className="font-display text-2xl text-ink">
                    {entity.name}
                  </h2>
                )}
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {entity.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          {group.body.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl border-t border-line px-5 py-16 md:px-8 md:pb-24">
        <FadeIn>
          <h2 className="font-display text-3xl text-ink">
            {group.standards.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {group.standards.lead}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {group.standards.items.map((item) => (
              <li
                key={item}
                className="border border-line bg-bg-elevated/40 px-4 py-3 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>
    </div>
  );
}
