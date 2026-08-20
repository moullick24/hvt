import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { home } from "@/content/home";

export function ProgressCards() {
  const { progress } = home;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
        <div>
          <h2 className="max-w-4xl font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.04] tracking-[-0.03em] text-[#1d315f]">
            {progress.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 md:mt-16 md:grid-cols-3">
          {progress.cards.map((card, index) => (
            <article key={card.title} className="h-full">
              <Link href={card.href} className="care-card group grid h-full grid-rows-[auto_auto_1fr_auto] outline-none">
                <div className="care-card-media relative aspect-[4/3] overflow-hidden bg-[#dfe3e1]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className={`care-card-image relative z-10 transition-transform duration-500 ease-out ${
                      index === 0
                        ? "object-cover object-[50%_8%] group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
                        : "scale-[0.94] object-contain object-bottom group-hover:scale-[0.97] group-focus-visible:scale-[0.97]"
                    }`}
                  />
                </div>

                <h3 className="mt-6 max-w-[23rem] font-display text-[1.75rem] leading-[1.18] tracking-[-0.025em] text-[#1d315f] transition-colors duration-300 group-hover:text-[#2f7f80]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-[25rem] text-[0.95rem] leading-7 text-[#45575a]">
                  {card.standfirst}
                </p>
                <span className="mt-7 inline-flex w-max items-center gap-2 border-b border-[#7b9291] pb-1 text-sm font-semibold text-[#315963] transition-colors group-hover:border-[#2f7f80] group-hover:text-[#2f7f80]">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
