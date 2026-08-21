/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

const standards = [
  {
    label: "CE",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg",
    imageClassName: "footer-standard-logo-ce",
  },
  {
    label: "FDA",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Food_and_Drug_Administration_logo.svg",
    imageClassName: "footer-standard-logo-fda",
  },
  {
    label: "HIPAA",
    rasterImage: "/media/compliance/hipaa-monochrome.png",
    imageClassName: "footer-standard-raster-hipaa",
  },
  {
    label: "ISO 27001",
    rasterImage: "/media/compliance/iso-registered.png",
    imageClassName: "footer-standard-raster-iso",
  },
] as const;

function StandardMark(standard: (typeof standards)[number]) {
  const hasImage = "image" in standard;
  const hasRasterImage = "rasterImage" in standard;

  return (
    <div
      className="footer-standard-mark"
      aria-label={`${standard.label} certificate link placeholder`}
      title={`${standard.label} certificate link will be added later`}
    >
      {hasImage ? (
        <>
          <span
            className={`footer-standard-logo ${standard.imageClassName}`}
            style={{ backgroundImage: `url("${standard.image}")` }}
            aria-hidden
          />
          <span className="sr-only">{standard.label}</span>
        </>
      ) : hasRasterImage ? (
        <>
          <img
            src={standard.rasterImage}
            alt=""
            className={`footer-standard-raster ${standard.imageClassName}`}
            aria-hidden
          />
          <span className="sr-only">{standard.label}</span>
        </>
      ) : null}
    </div>
  );
}

function GatewayOfIndiaIcon() {
  return (
    <Image
      src="/media/footer/gateway-of-india-white-cutout-v2.png"
      alt="Gateway of India"
      width={1575}
      height={998}
      className="h-auto w-24 object-contain sm:w-28"
    />
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer-gradient relative mt-auto overflow-hidden text-white" role="contentinfo">
      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1536px] flex-col px-5 py-12 sm:px-8 lg:px-12 lg:py-14 xl:px-16">
        <div className="grid flex-1 items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="max-w-[30rem]">
            <Link
              href="/#top"
              className="flex min-h-[9rem] items-center"
              aria-label={`${site.name} home`}
            >
              <Image
                src="/brand/healthvoitho-logo.png"
                alt={site.name}
                width={360}
                height={144}
                className="h-auto w-[290px] brightness-0 invert sm:w-[350px]"
              />
            </Link>
            <p className="mt-4 max-w-[27rem] text-sm leading-6 text-white/76 sm:text-[0.95rem]">
              HealthVoitho Technologies Pvt. Ltd. is a part of Esperer Group of Companies.
            </p>

            <div className="mt-9 max-w-[29rem] border-t border-white/18 pt-7">
              <GatewayOfIndiaIcon />
              <div className="mt-5 max-w-[27rem] text-sm leading-6 text-white/78">
                <address className="not-italic">
                  Gundecha Enclave, 4BA, 4th Floor, Khairani Rd., Saki Naka, Mumbai, Maharashtra 400072
                </address>
                <div className="mt-4 space-y-1">
                  <p>
                    Email: <a className="footer-link" href="mailto:info@healthvoitho.com">info@healthvoitho.com</a>
                  </p>
                  <p>
                    Phone: <a className="footer-link" href="tel:+912227840109">022-27840109</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full min-h-[19rem] flex-col justify-between lg:items-end">
            <div
              className="flex min-h-[9rem] flex-wrap items-center gap-3 lg:justify-end"
              aria-label="Standards and regulatory pathways"
            >
              {standards.map((standard) => (
                <StandardMark key={standard.label} {...standard} />
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm lg:justify-end">
              <Link href="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="footer-link">
                Terms &amp; Conditions
              </Link>
              <a
                href="https://in.linkedin.com/company/health-voitho-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
              <p className="text-white/72">© Copyright {year} {site.name}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
