import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
};

export default function ContactPage() {
  return (
    <div className="atmosphere">
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:px-8 md:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {contact.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            {contact.title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {contact.lead}
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ContactForm />
        </FadeIn>
      </section>
    </div>
  );
}
