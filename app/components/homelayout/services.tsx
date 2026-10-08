import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  FaBuilding,
  FaCog,
  FaFileInvoice,
  FaRegRegistered,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { site } from "@/data/index";
import type { CorpEaseServicesData } from "@/data/index";
import AnimateIn from "@/app/components/ui/animate-in";

const servicesData: CorpEaseServicesData = site.ourServices as CorpEaseServicesData;

const iconMap: Record<string, React.ElementType> = {
  FaBuilding,
  FaUsers,
  FaUser,
  FaFileInvoice,
  FaCog,
  FaRegRegistered,
};

export default function Services({ limit }: { limit?: number }) {
  if (!servicesData) return null;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <AnimateIn direction="up" delay={0.1}>
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
                {servicesData.badge}
              </p>
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
            </div>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.2}>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl lg:text-5xl text-[#101D33]">
              {servicesData.titlePrefix}{" "}
              <span className="text-[#F9A61A]">{servicesData.titleHighlight}</span>
            </h2>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.3}>
            <p className="mx-auto mt-2 max-w-[640px] text-xs sm:text-sm md:text-base text-slate-500 sm:text-base">
              {servicesData.description}
            </p>
          </AnimateIn>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(limit ? servicesData.services?.slice(0, limit) : servicesData.services)?.map(({ title, description, link, icon, image }, idx) => {
            const Icon = iconMap[icon] || FaBuilding;
            return (
              <AnimateIn key={title} direction="up" delay={0.1 + idx * 0.1}>
                <Link
                  href={link}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_6px_24px_rgba(16,29,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,29,51,0.14)]"
                >
                  {/* Image */}
                  <div className="relative h-[190px] w-full overflow-hidden sm:h-[200px]">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4 sm:flex-row sm:items-start sm:gap-4">
                    {/* Top row for mobile (Icon + Title + Arrow) / Just Icon for Desktop */}
                    <div className="flex w-full items-center gap-3 sm:w-auto sm:items-start sm:gap-0">
                      <span className="relative block h-[64px] w-[64px] shrink-0 sm:mb-2 sm:h-[78px] sm:w-[78px]">
                        {/* yellow base peeking out below the navy box */}
                        <span className="absolute inset-0 translate-y-1 rounded-xl bg-[#F9A61A]" />
                        <span className="relative flex h-full w-full items-center justify-center rounded-xl bg-[#101D33] text-[32px] sm:text-[44px] text-[#F9A61A]">
                          <Icon />
                        </span>
                      </span>

                      {/* Title (Mobile only) */}
                      <h3 className="flex-1 text-[15px] font-bold leading-snug text-[#101D33] sm:hidden">
                        {title}
                      </h3>

                      {/* Arrow (Mobile only) */}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F9A61A] text-xl text-[#101D33] transition group-hover:bg-[#101D33] group-hover:text-[#F9A61A] sm:hidden">
                        <FiArrowRight />
                      </span>
                    </div>

                    {/* Title and Description (Desktop) / Description (Mobile) */}
                    <div className="mt-3 min-w-0 flex-1 sm:mt-0">
                      <h3 className="hidden text-[15px] font-bold leading-snug text-[#101D33] sm:block">
                        {title}
                      </h3>
                      <p className="mt-0 text-[13px] leading-relaxed text-slate-600 sm:mt-1.5">
                        {description}
                      </p>
                    </div>

                    {/* Arrow (Desktop only) */}
                    <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F9A61A] text-xl text-[#101D33] transition group-hover:bg-[#101D33] group-hover:text-[#F9A61A] sm:flex">
                      <FiArrowRight />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
