"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { contactCta, navLinks, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--header-bg)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-8 md:py-3.5">
        <Link
          href="/"
          className="relative flex shrink-0 items-center rounded-md bg-black px-2.5 py-1.5"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
        >
          <Image
            src="/brand/healthvoitho-logo.png"
            alt={site.name}
            width={220}
            height={56}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9375rem] tracking-wide transition-colors ${
                  active
                    ? "font-medium text-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={contactCta.href}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-deep"
          >
            {contactCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-line px-4 py-2 text-sm text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-base text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={contactCta.href}
                className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {contactCta.label}
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
