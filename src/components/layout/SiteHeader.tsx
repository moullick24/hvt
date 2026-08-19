"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { contactCta, navLinks, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid h-[5rem] max-w-[1500px] grid-cols-[1fr_auto] items-center gap-5 px-5 sm:h-[5.5rem] sm:px-8 lg:grid-cols-[minmax(210px,1fr)_auto_minmax(210px,1fr)] lg:px-12 xl:px-16">
        <div className="flex min-w-0 items-center">
        <button
          type="button"
          className="mr-3 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#1d315f] transition hover:bg-[#eef4f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

          <Link
            href="/"
            className="relative flex shrink-0 items-center overflow-hidden"
            onClick={() => setOpen(false)}
            aria-label={`${site.name} home`}
          >
            <Image
              src="/brand/healthvoitho-logo.png"
              alt={site.name}
              width={220}
              height={88}
              preload
              className="h-[3.7rem] w-auto object-contain sm:h-[4.4rem]"
            />
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 lg:flex xl:gap-9" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`header-nav-link relative whitespace-nowrap py-2 text-[0.82rem] font-medium tracking-[0.01em] transition-colors ${
                  active ? "text-[#2f7f80]" : "text-[#263b40] hover:text-[#2f7f80]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={contactCta.href}
          className="header-outline-action group inline-flex shrink-0 items-center justify-self-end gap-2 rounded-full border-[1.5px] border-transparent px-4 py-2.5 text-xs font-semibold sm:px-5 sm:text-sm"
          onClick={() => setOpen(false)}
        >
          {contactCta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </Link>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-[5rem] overflow-y-auto border-t border-[#dfe6e4] bg-[#f4efe7] sm:top-[5.5rem] lg:hidden"
            aria-label="Primary"
          >
            <div className="mx-auto grid min-h-full max-w-[1500px] content-center gap-10 px-7 py-12 sm:px-12 lg:grid-cols-[1fr_0.65fr] lg:px-20">
              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group flex items-baseline justify-between gap-5 border-b border-[#cfd9d6] py-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-none tracking-[-0.035em] transition-colors hover:text-accent ${
                        active ? "text-accent" : "text-[#20383b]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="font-sans text-xs tracking-[0.16em] text-muted">
                        0{index + 1}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="self-end lg:pb-4">
                <p className="max-w-md text-lg leading-relaxed text-muted">
                  Intelligent systems for earlier, more accessible cancer care.
                </p>
                <Link
                  href={contactCta.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent"
                  onClick={() => setOpen(false)}
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
