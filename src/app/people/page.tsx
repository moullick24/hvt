import type { Metadata } from "next";
import Image from "next/image";
import { ContourLines } from "@/components/home/ContourLines";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { people } from "@/content/people";

export const metadata: Metadata = {
  title: people.meta.title,
  description: people.meta.description,
};

export default function PeoplePage() {
  return (
    <main className="page-header-underlay people-page relative isolate overflow-hidden bg-white">
      <ContourLines />

      <section className="relative z-10 mx-auto max-w-[1536px] px-5 pb-14 pt-20 sm:px-8 md:pb-20 md:pt-28 lg:px-12 lg:pt-36 xl:px-16">
        <FadeIn>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-[#1d315f] md:text-6xl">
            {people.titlePrefix}{" "}
            <span className="people-purpose-gradient">{people.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.65] text-muted md:mt-9 md:text-xl">
            {people.lead}
          </p>
        </FadeIn>
      </section>

      <section className="relative z-10 mx-auto max-w-[1536px] px-5 pb-24 sm:px-8 md:pb-32 lg:px-12 xl:px-16">
        <Stagger className="mx-auto grid max-w-[320px] gap-x-6 gap-y-12 md:max-w-[980px] md:grid-cols-3 md:gap-y-16">
          {people.leaders.map((person) => (
            <StaggerItem key={person.id}>
              <article className="people-card group">
                <figure className="people-portrait-field relative aspect-[3/3.45] overflow-hidden bg-[#e8ebe9]">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className={`people-portrait-image ${person.imageClassName}`}
                  />
                </figure>
                <div className="border-b border-ink/25 pb-5 pt-5">
                  <h2 className="text-base font-semibold leading-snug text-ink md:text-lg">
                    {person.name}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted md:text-base">
                    {person.role}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
