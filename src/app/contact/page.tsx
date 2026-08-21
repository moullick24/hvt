import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContourLines } from "@/components/home/ContourLines";
import { FadeIn } from "@/components/motion/FadeIn";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
};

export default function ContactPage() {
  return (
    <main className="page-header-underlay contact-page relative isolate overflow-hidden bg-white">
      <ContourLines />

      <section className="relative z-10 mx-auto grid max-w-[1536px] gap-14 px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-24 lg:px-12 lg:pt-36 xl:px-16">
        <FadeIn>
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-[#1d315f] md:text-6xl">
            {contact.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-[1.7] text-muted md:mt-9 md:text-xl">
            {contact.lead}
          </p>
        </FadeIn>
        <FadeIn className="border-t border-[#b9cdcd]/80 pt-8 md:pt-10" delay={0.08}>
          <ContactForm />
        </FadeIn>
      </section>
    </main>
  );
}
