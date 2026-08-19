"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { home } from "@/content/home";

export function ProgressCards() {
  const reduce = useReducedMotion();
  const { progress } = home;

  return (
    <section className="atmosphere border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {progress.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl">
            {progress.title}
          </h2>
        </FadeIn>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {progress.cards.map((card) => (
            <StaggerItem key={card.title}>
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="h-full"
              >
                <Link
                  href={card.href}
                  className="group flex h-full flex-col border border-line bg-bg-elevated/70 p-6 transition hover:border-accent/40 md:p-7"
                >
                  <div
                    className="mb-6 aspect-[4/3] w-full bg-[linear-gradient(145deg,#d9cfc0,#c9b7a4_45%,#a98978)]"
                    aria-hidden
                  />
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">
                    {card.category} · {card.status}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-snug text-ink group-hover:text-accent">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {card.standfirst}
                  </p>
                  <span className="mt-6 text-sm text-accent">Read more →</span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
