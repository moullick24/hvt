import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { home } from "@/content/home";

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative bg-transparent">
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5.5rem)] max-w-[1536px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(500px,0.88fr)] lg:gap-3 lg:px-12 lg:py-10 xl:px-16">
        <div className="relative z-10 max-w-[820px]">
            <h1 className="font-display text-[clamp(2.75rem,4.25vw,4.6rem)] font-normal leading-[0.98] tracking-[-0.035em] text-[#1d315f]">
              <span className="block lg:whitespace-nowrap">
                <span className="hero-gradient-text">Intelligent</span> Healthcare
              </span>
              <span className="mt-[0.08em] block lg:whitespace-nowrap">in Cancer Ecosystem.</span>
              <span className="mt-[0.08em] block lg:whitespace-nowrap">Accessible Everywhere.</span>
            </h1>
            <p className="mt-5 max-w-[570px] text-base leading-relaxed text-[#34494c] sm:mt-7 sm:text-lg md:text-xl">
              {hero.deck}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <Link
                href={hero.primaryCta.href}
                className="hero-outline-action group inline-flex items-center gap-3 rounded-full border-[1.5px] border-transparent px-6 py-3.5 text-sm font-semibold sm:text-base"
              >
                {hero.primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="hero-outline-action group inline-flex items-center gap-3 rounded-full border-[1.5px] border-transparent px-6 py-3.5 text-sm font-semibold sm:text-base"
              >
                {hero.secondaryCta.label}
                <Handshake
                  className="h-[1.1rem] w-[1.1rem] transition-transform group-hover:scale-110"
                  aria-hidden
                />
              </Link>
            </div>
        </div>

        <div className="relative min-h-[430px] w-full sm:min-h-[540px] lg:min-h-[680px]">
          <div className="hero-photo-frame absolute bottom-[6%] left-[3%] h-[78%] w-[57%] rounded-[999px_999px_2.25rem_2.25rem] sm:left-[5%] sm:w-[55%]">
            <Image
              src="/media/hero-scientist-v3.png"
              alt="A biomedical scientist adjusting diagnostic research equipment"
              fill
              preload
              unoptimized
              sizes="(max-width: 1024px) 72vw, 38vw"
              className="object-cover object-[51%_center]"
            />
            <span className="hero-photo-tint" aria-hidden />
          </div>

          <div className="hero-photo-frame absolute right-[2%] top-[3%] h-[38%] w-[33%] rounded-b-[999px] rounded-t-[2rem] sm:right-[3%] sm:w-[31%]">
            <Image
              src="/media/hero-cancer-patient-v3.png"
              alt="A cancer patient enjoying an ordinary good day"
              fill
              quality={90}
              sizes="(max-width: 1024px) 34vw, 17vw"
              className="object-cover object-[50%_28%]"
            />
            <span className="hero-photo-tint" aria-hidden />
          </div>

          <div className="hero-photo-frame absolute bottom-[8%] right-0 h-[42%] w-[35%] rounded-[999px] sm:right-[1%] sm:w-[33%]">
            <Image
              src="/media/enveda-platform-green-v2.png"
              alt="A pipette positioned above a research culture dish"
              fill
              quality={90}
              sizes="(max-width: 1024px) 36vw, 18vw"
              className="object-cover object-[50%_52%]"
            />
            <span className="hero-photo-tint" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
