import React from "react";
import { cn } from "@/lib/utils";

interface CtaWaysToGiveProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  className?: string;
}

export const CtaWaysToGive = React.forwardRef<HTMLElement, CtaWaysToGiveProps>(
  (
    {
      title = "Join CRI in Shaping the Future of Immunotherapy",
      description =
        "Support the pioneering work of CRI in advancing immunotherapy.",
      buttonText = "See ways to give",
      buttonHref = "/ways-to-give/",
      backgroundImage =
        "https://www.cancerresearch.org/wp-content/uploads/2025/04/happy-couple-large.webp",
      className,
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-[#F0EFFF] font-sans",
          className,
        )}
      >
        <div className="mx-auto max-w-[1536px] px-5">
          <div className="relative mx-auto max-w-[1440px]">
            <div className="relative flex min-h-[430px] w-full items-center justify-center overflow-hidden py-24 lg:ml-[120px] lg:w-[1320px]">
              <div className="absolute inset-0 z-0">
                {/* The remote URL is intentionally preserved from the supplied component. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={backgroundImage}
                  alt="Father and son"
                  className="h-full w-full object-contain object-right-bottom"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 lg:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.7) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
                  }}
                />
              </div>

              <div className="relative z-10 w-full max-w-[1440px]">
                <div className="max-w-[486px]">
                  <h2 className="font-display text-5xl font-normal leading-[1.17] text-[#1D1752]">
                    {title}
                  </h2>
                  <p className="mt-5 text-lg font-normal leading-[1.25] text-black">
                    {description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <div className="group relative">
                      <a
                        href={buttonHref}
                        className="relative flex items-center justify-center rounded-[96px] border-[1.6px] border-transparent px-7 py-4 text-lg font-medium leading-none text-white transition-all duration-300 hover:opacity-90"
                        style={{
                          background:
                            "linear-gradient(90deg, rgb(117, 77, 193) 0%, rgb(253, 65, 28) 170.72%)",
                        }}
                      >
                        {buttonText}
                        <span
                          className="ml-2.5 inline-block h-[18px] w-[23px] transition-transform duration-300 group-hover:translate-x-1"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='12' fill='none' viewBox='0 0 34 12'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M32 6.75H0v-1.5h32z' clip-rule='evenodd'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='m27 1 5 5-5 5'/%3E%3C/svg%3E")`,
                            backgroundPosition: "100% 50%",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

CtaWaysToGive.displayName = "CtaWaysToGive";

export default CtaWaysToGive;
