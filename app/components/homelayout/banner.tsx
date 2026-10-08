import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/app/components/ui/animate-in";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { CorpEaseBannerData } from "@/data/index";

const bannerData: CorpEaseBannerData = site.banner as CorpEaseBannerData;

export default function Hero() {
  if (!bannerData) return null;
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0F1B2D]">
      {/* Background photo */}
      <Image
        src={bannerData.bgImage}
        alt={bannerData.bgImageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] lg:object-right"
      />

      {/* Dark navy overlay: solid on the left, fading out to the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0F1B2D] via-[#0F1B2D]/85 to-[#0F1B2D]/10 max-lg:from-[#0F1B2D]/95 max-lg:via-[#0F1B2D]/80 max-lg:to-[#0F1B2D]/60" />

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        <div className="flex min-h-[480px] items-center py-16 sm:min-h-[535px] lg:py-16">
          <div className="max-w-[620px]">
            {/* Tagline */}
            <AnimateIn direction="up" delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-[#F2A431]" />
                <p className="text-[13px] font-medium uppercase tracking-wide text-white sm:text-sm">
                  {bannerData.badge}
                </p>
              </div>
            </AnimateIn>

            {/* Heading */}
            <AnimateIn direction="up" delay={0.2}>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white ">
                {bannerData.titlePrefix}
                <span className="block text-[#F2A431]">{bannerData.titleHighlight}</span>
                {bannerData.titleSuffix}
              </h1>
            </AnimateIn>

            {/* Description */}
            <AnimateIn direction="up" delay={0.3}>
              <p className="mt-2 max-w-[520px] text-base leading-relaxed text-white/90 sm:text-[17px]">
                {bannerData.description}
              </p>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn direction="up" delay={0.4}>
              <Link
                href={bannerData.ctaButton.href}
                className="mt-4 inline-flex items-center gap-3 rounded-xl bg-[#F2A431] px-7 py-3.5 text-[16px] font-semibold text-[#1F2A3C] transition hover:bg-[#E8A02F]"
              >
                {bannerData.ctaButton.label}
                <FiArrowRight className="text-xl" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
