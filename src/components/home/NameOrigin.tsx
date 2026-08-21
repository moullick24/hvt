"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { home } from "@/content/home";

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function range(progress: number, start: number, end: number) {
  const value = clamp((progress - start) / (end - start));
  return value * value * (3 - 2 * value);
}

export function NameOrigin() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { origin } = home;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = reduceMotion ? 1 : clamp((window.scrollY - sectionTop) / distance);

      section.style.setProperty("--origin-split", String(range(progress, 0.12, 0.52)));
      section.style.setProperty("--origin-reveal", String(range(progress, 0.24, 0.62)));
      section.style.setProperty("--origin-definition", String(range(progress, 0.58, 0.76)));
      section.style.setProperty("--origin-purpose", String(range(progress, 0.78, 0.96)));
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className={`name-origin relative bg-white text-[#1a2426] ${reduceMotion ? "name-origin-reduced" : ""}`}
      style={
        {
          "--origin-split": reduceMotion ? 1 : 0,
          "--origin-reveal": reduceMotion ? 1 : 0,
          "--origin-definition": reduceMotion ? 1 : 0,
          "--origin-purpose": reduceMotion ? 1 : 0,
        } as React.CSSProperties
      }
    >
      <div className="name-origin-stage sticky top-0 h-svh min-h-[620px] overflow-hidden">
        <div className="name-origin-glow name-origin-glow-one" aria-hidden />
        <div className="name-origin-glow name-origin-glow-two" aria-hidden />

        <div className="absolute inset-x-0 top-0 z-20 mx-auto max-w-[1536px] px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12 xl:px-16">
          <h2 className="max-w-[12ch] font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.04] tracking-[-0.03em] text-[#1d315f]">
            {origin.title}
          </h2>
        </div>

        <div className="name-origin-wordmark absolute inset-0 z-10 flex items-center justify-center" aria-label="HealthVoitho">
          <span className="name-origin-word name-origin-word-health">{origin.firstWord}</span>
          <span className="name-origin-word name-origin-word-voitho">{origin.secondWord}</span>
        </div>

        <div className="name-origin-image pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[18rem] w-[92vw] md:h-[clamp(22rem,46vh,30rem)] md:w-[min(62vw,60rem)]">
          <Image
            src="/media/name-origin-helping-hands-v2.png"
            alt="A painted hand reaching across to support another"
            fill
            sizes="(max-width: 767px) 92vw, 62vw"
            className="object-contain"
          />
        </div>

        <div className="name-origin-copy absolute inset-x-0 bottom-0 z-20 mx-auto grid max-w-[1536px] gap-7 px-5 pb-12 sm:px-8 sm:pb-16 md:grid-cols-2 md:gap-20 lg:px-12 xl:px-16">
          <p className="name-origin-copy-block name-origin-definition max-w-[31rem] text-base leading-7 text-[#34494c] sm:text-lg sm:leading-8">
            {origin.definition}
          </p>
          <p className="name-origin-copy-block name-origin-purpose max-w-[38rem] text-base leading-7 text-[#34494c] sm:justify-self-end sm:text-lg sm:leading-8">
            {origin.purpose}
          </p>
        </div>
      </div>
    </section>
  );
}
