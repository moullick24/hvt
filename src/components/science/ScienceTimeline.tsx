"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

type ScienceSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export function ScienceTimeline({
  sections,
}: {
  sections: readonly ScienceSection[];
}) {
  const timelineRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 62%", "end 62%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    mass: 0.35,
  });

  return (
    <section
      ref={timelineRef}
      className="science-timeline relative mx-auto max-w-[1536px] px-5 pb-24 sm:px-8 md:pb-32 lg:px-12 xl:px-16"
    >
      <div className="relative">
        <div className="science-timeline-track" aria-hidden>
          <motion.span
            className="science-timeline-progress"
            style={{ scaleY: reduceMotion ? 1 : progress }}
          />
        </div>

        {sections.map((section, index) => (
          <motion.article
            key={section.id}
            className="science-timeline-section"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : index * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="science-timeline-title">
              <h2 className="science-heading-gradient font-display text-[clamp(2rem,3vw,3.25rem)] leading-[1.08] tracking-[-0.035em]">
                {section.title}
              </h2>
            </div>

            <div className="science-timeline-marker" aria-hidden>
              <span />
            </div>

            <div className="science-timeline-copy space-y-5 text-base leading-[1.75] text-[#42565b] md:text-[1.05rem]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 42)}>{paragraph}</p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
