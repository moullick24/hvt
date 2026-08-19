"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { home } from "@/content/home";

export function Hero() {
  const reduce = useReducedMotion();
  const { hero } = home;

  return (
    <section className="relative isolate min-h-[min(92vh,920px)] overflow-hidden text-white">
      <Image
        src="/media/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
        aria-hidden
      />
      <div className="hero-scrim absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[min(92vh,920px)] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/90 md:text-xl">
            {hero.deck}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-accent-soft"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/55 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
