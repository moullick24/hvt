import Link from "next/link";
import { contactCta, navLinks, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-sm">
          <p className="font-display text-2xl text-ink">{site.name}</p>
          <p className="mt-2 text-sm text-muted">
            {site.legalName} · {site.group}
          </p>
          <p className="mt-3 text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={contactCta.href}
            className="text-muted transition hover:text-ink"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted md:flex-row md:justify-between md:px-8">
          <p>
            © {year} {site.legalName}
          </p>
          <p>Partners and scientists — not a consumer screening service.</p>
        </div>
      </div>
    </footer>
  );
}
