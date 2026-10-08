import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { CorpEaseSubBannerData } from "@/data/index";
import AnimateIn from "@/app/components/ui/animate-in";

export default function SubBanner({ data }: { data?: CorpEaseSubBannerData }) {
  const subBannerData = data || site.subBanners.about;
  if (!subBannerData) return null;

  return (
    <section className="relative w-full h-[300px] md:h-[380px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={subBannerData.bgImage}
        alt={subBannerData.title}
        fill
        priority
        className="object-cover -z-20 object-top"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#101D33]/75 -z-10" />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <AnimateIn direction="up" delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {subBannerData.title}
          </h1>
        </AnimateIn>
        
        <AnimateIn direction="up" delay={0.2}>
          <div className="flex items-center gap-2 text-sm md:text-base font-medium mt-1">
          {subBannerData.breadcrumbs?.map((crumb: any, index: number) => {
            const isLast = index === subBannerData.breadcrumbs.length - 1;
            return (
              <div key={crumb.label} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <>
                    <Link href={crumb.href} className="text-[#F9A61A] hover:text-[#E39A12] transition">
                      {crumb.label}
                    </Link>
                    <FiChevronRight className="text-white text-lg" />
                  </>
                )}
              </div>
            );
          })}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
