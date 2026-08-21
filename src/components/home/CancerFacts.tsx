"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const facts = [
  {
    value: 72,
    suffix: "%",
    label: "72 percent",
    description: "of lung cancers are found when the disease is already advanced.",
  },
  {
    value: 28,
    suffix: "%",
    label: "28 percent",
    description: "of people with breast cancer are unaware it is there.",
  },
  {
    value: 1,
    secondaryValue: 5,
    label: "1 in 5",
    description: "cancer deaths are driven by malnutrition — not by the tumour alone.",
  },
] as const;

function useCounter(target: number, started: boolean, reduceMotion: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started || reduceMotion || target <= 0) return;

    let frame = 0;
    let startedAt = 0;
    const duration = 1450;

    const tick = (timestamp: number) => {
      if (!startedAt) startedAt = timestamp;
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion, started, target]);

  return reduceMotion ? target : value;
}

function FactNumber({
  value,
  secondaryValue,
  suffix,
  label,
  started,
  reduceMotion,
}: {
  value: number;
  secondaryValue?: number;
  suffix?: string;
  label: string;
  started: boolean;
  reduceMotion: boolean;
}) {
  const primary = useCounter(value, started, reduceMotion);
  const secondary = useCounter(secondaryValue ?? 0, started, reduceMotion);

  return (
    <p
      className="font-sans text-[clamp(4.75rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.08em] text-[#203b42] tabular-nums"
      aria-label={label}
    >
      <span aria-hidden>
        {primary}
        {secondaryValue ? (
          <span className="ml-[0.12em] text-[0.5em] tracking-[-0.04em]">in {secondary}</span>
        ) : (
          <span className="text-[0.58em] tracking-[-0.04em]">{suffix}</span>
        )}
      </span>
    </p>
  );
}

export function CancerFacts() {
  const statsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [started, setStarted] = useState(false);
  const counterStarted = reduceMotion || started;

  useEffect(() => {
    const stats = statsRef.current;
    if (!stats) return;

    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(stats);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section className="cancer-facts relative bg-transparent text-[#1a2426]">
      <div className="relative z-10 mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="py-20 md:py-28">
          <h2 className="max-w-[1040px] font-display text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.04] tracking-[-0.03em] text-[#1d315f]">
            Cancer is becoming a family fact
            <span className="hero-gradient-text -mb-[0.12em] block pb-[0.12em]">
              and we&apos;re here to change it.
            </span>
          </h2>

          <div
            ref={statsRef}
            className="mt-16 grid border-t border-[#b8c9c6] md:mt-24 md:grid-cols-3"
          >
            {facts.map((fact, index) => (
              <article
                key={fact.label}
                className={`py-10 md:min-h-[285px] md:px-8 md:py-12 lg:px-10 ${
                  index > 0 ? "border-t border-[#b8c9c6] md:border-l md:border-t-0" : ""
                }`}
              >
                <FactNumber
                  value={fact.value}
                  secondaryValue={"secondaryValue" in fact ? fact.secondaryValue : undefined}
                  suffix={"suffix" in fact ? fact.suffix : undefined}
                  label={fact.label}
                  started={counterStarted}
                  reduceMotion={reduceMotion}
                />
                <p className="mt-8 max-w-[21rem] text-base leading-7 text-[#45575a] sm:text-lg sm:leading-8">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
