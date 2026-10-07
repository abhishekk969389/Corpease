import Image from "next/image";
import { FaChartLine, FaRegThumbsUp, FaUsers } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { site } from "@/data/index";
import type { CorpEaseWhyChooseUsData } from "@/data/index";

const iconMap: Record<string, React.ElementType> = {
  FaChartLine,
  FaRegThumbsUp,
  FaUsers,
  MdOutlineVerifiedUser,
};

export default function WhyChooseUs({ data }: { data?: CorpEaseWhyChooseUsData }) {
  const whyData = data || site.whyChooseUs;
  if (!whyData) return null;
  const BadgeIcon = iconMap[whyData.badgeIcon] || FaChartLine;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        <div className="grid items-center gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          {/* Left: heading + intro + two features */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
                {whyData.badge}
              </p>
            </div>

            <h2 className="mt-1 text-3xl font-bold sm:text-4xl lg:text-5xl text-[#101D33]">
              {whyData.titlePrefix}{" "}
              <span className="text-[#F9A61A]">
                {whyData.titleHighlight}
              </span>{" "}
              {whyData.titleSuffix}
            </h2>

            <p className="mt-2 max-w-[560px] text-xs sm:text-sm md:text-base leading-relaxed text-slate-500">
              {whyData.description}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {whyData.leftFeatures.map(({ title, text, icon }) => {
                const Icon = iconMap[icon] || FaChartLine;
                return (
                <div key={title} className="flex items-center gap-4">
                  <span className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#FDF1DD] text-[34px] text-[#F9A61A] hover:bg-[#F9A61A] hover:text-[#FDF1DD]">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-[#101D33] lg:text-[18px]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {text}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Middle: image with yellow bar and navy badge */}
          <div className="relative mx-auto w-full max-w-[420px] pb-8 md:max-w-none lg:mx-0">
            {/* yellow bar behind the photo */}
            <span className="absolute bottom-16 left-0 top-10 w-8 rounded-xl bg-[#F9A61A]" />

            <div className="relative ml-4 h-[360px] overflow-hidden rounded-2xl shadow-xl sm:h-[420px] lg:h-[440px]">
              <Image
                src={whyData.image}
                alt={whyData.imageAlt}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* navy badge */}
            <div className="absolute bottom-0 right-2 w-[190px] rounded-xl bg-[#101D33] p-5 shadow-xl sm:right-0 lg:-right-8 lg:w-[200px]">
              <BadgeIcon className="text-3xl text-[#F9A61A]" />
              <p className="mt-3 text-xl font-bold leading-snug text-white">
                {whyData.badgeTitle}
                <span className="block text-[#F9A61A]">{whyData.badgeSubtitle}</span>
              </p>
            </div>
          </div>

          {/* Right: three points */}
          <div className="relative md:pl-8 lg:pl-10">
            {/* thin guide line */}
            <span className="absolute bottom-0 left-0 top-0 hidden w-px bg-slate-200 md:block" />

            <ul>
              {whyData.rightFeatures.map(({ title, text, icon }, i) => {
                const Icon = iconMap[icon] || FaChartLine;
                return (
                <li
                  key={title}
                  className={`relative flex items-start gap-4 py-5 first:pt-0 last:pb-0 ${
                    i < whyData.rightFeatures.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  {i < whyData.rightFeatures.length - 1 && (
                    <span className="absolute -left-8 top-1/2 hidden h-14 w-[2px] -translate-y-1/2 bg-[#F9A61A] md:block lg:-left-10" />
                  )}
                  <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#FDF1DD] text-[28px] text-[#F9A61A] hover:bg-[#F9A61A] hover:text-[#FDF1DD]">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-[#101D33] lg:text-[18px]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {text}
                    </p>
                  </div>
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}