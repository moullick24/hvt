import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { partnerships } from "@/content/partnerships";

export const metadata: Metadata = {
  title: partnerships.meta.title,
  description: partnerships.meta.description,
};

export default function PartnershipsPage() {
  return (
    <div className="atmosphere">
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:px-8 md:pt-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {partnerships.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
            {partnerships.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {partnerships.lead}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-16 md:px-8">
        {partnerships.partners.map((partner, index) => (
          <FadeIn key={partner.id} delay={index * 0.06}>
            <article className="border-t border-line pt-12">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                {partner.label}
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
                {partner.name}
              </h2>
              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-accent">
                {partner.detailsTitle}
              </p>
              <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
                {partner.paragraphs.map((p) => (
                  <p key={p.slice(0, 36)}>{p}</p>
                ))}
              </div>
              <dl className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-ink">
                    What HealthVoitho brings
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {partner.weBring}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink">
                    What the pathway brings
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {partner.theyBring}
                  </dd>
                </div>
              </dl>
              {partner.href ? (
                <a
                  href={partner.href}
                  className="mt-8 inline-flex text-sm text-accent hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {partner.linkLabel} →
                </a>
              ) : (
                <p className="mt-8 text-sm text-muted">
                  {partner.linkLabel} — link forthcoming.
                </p>
              )}
            </article>
          </FadeIn>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <FadeIn>
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Our partnership principles
          </h2>
        </FadeIn>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
          {partnerships.principles.map((principle) => (
            <StaggerItem key={principle.title}>
              <div className="border border-line bg-bg-elevated/50 p-6">
                <h3 className="font-display text-xl text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
