import Image from "next/image";
import { FiShield, FiTrendingUp, FiAward, FiBarChart, FiFileText, FiFile, FiBriefcase, FiCheckCircle, FiCheck, FiChevronRight } from "react-icons/fi";
import type { CorpEaseServiceDetailsData } from "@/data/index";

const iconMap: Record<string, React.ElementType> = {
  FiShield,
  FiTrendingUp,
  FiAward,
  FiBarChart,
  FiFileText,
  FiFile,
  FiBriefcase,
  FiCheckCircle,
};

export default function ServiceContent({ data }: { data: CorpEaseServiceDetailsData }) {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-8">
      {/* Overview Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14 lg:items-stretch">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 w-full py-1">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
              {data.overview.badge}
            </p>
          </div>
          <h2 className="mt-1 text-3xl font-bold sm:text-4xl lg:text-[40px] leading-[1.2] text-[#101D33]">
            {data.overview.titlePrefix} <span className="text-[#F9A61A]">{data.overview.titleHighlight}</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-500">
            {data.overview.description}
          </p>
        </div>
        
        {/* Right Side: Image */}
        <div className="relative w-full sm:w-[400px] lg:w-[340px] xl:w-[400px] shrink-0 mt-8 lg:mt-0 flex flex-col ml-4 sm:ml-5 lg:ml-0">
          {/* yellow accent behind */}
          <span className="absolute -left-4 sm:-left-5 top-4 bottom-4 w-16 rounded-[20px] bg-[#F9A61A]" />
          <div className="relative h-[240px] sm:h-[300px] lg:h-auto lg:flex-1 w-full overflow-hidden rounded-[20px] shadow-xl bg-slate-100">
            <Image
              src={data.overview.image}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 400px, (min-width: 1024px) 340px, 100vw"
            />
          </div>
        </div>
        
      </div>

      {/* Key Benefits */}
      <div>
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <span className="h-[2px] w-10 bg-[#F9A61A]" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
            {data.benefits.badge}
          </p>
        </div>
        <h2 className="mt-1 text-3xl font-bold sm:text-4xl text-[#101D33] text-center sm:text-left">
          {data.benefits.titlePrefix} <span className="text-[#F9A61A]">{data.benefits.titleHighlight}</span>
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.benefits.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || FiShield;
            return (
              <div key={idx} className="flex flex-col items-center text-center sm:items-start sm:text-left rounded-xl bg-slate-50 p-5 border border-slate-100 transition hover:shadow-lg">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF1DC] text-2xl text-[#F9A61A]">
                  <Icon />
                </span>
                <h3 className="text-base font-bold text-[#101D33]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Registration Process */}
      <div>
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <span className="h-[2px] w-10 bg-[#F9A61A]" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
            {data.process.badge}
          </p>
        </div>
        <h2 className="mt-1 text-3xl font-bold sm:text-4xl text-[#101D33] text-center sm:text-left">
          {data.process.titlePrefix} <span className="text-[#F9A61A]">{data.process.titleHighlight}</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6 relative">
          {data.process.steps.map((step, idx) => {
            const Icon = iconMap[step.icon] || FiFileText;
            const isLast = idx === data.process.steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col items-center text-center sm:items-start sm:text-left group">
                
                {/* Connecting line + chevron for desktop (hidden on last item) */}
                {!isLast && (
                  <div className="hidden sm:flex absolute top-10 left-[88px] right-[-16px] items-center justify-center pointer-events-none z-0">
                    <div className="h-[2px] w-full bg-[#E8EDF2]" />
                    <span className="absolute bg-white px-2 text-[#64748B]">
                      <FiChevronRight className="h-5 w-5" />
                    </span>
                  </div>
                )}

                {/* Icon Circle */}
                <span className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#F3F6F8] text-[28px] text-[#101D33] transition-transform duration-300 group-hover:scale-105">
                  <Icon />
                </span>

                {/* Text Content */}
                <h4 className="mt-5 text-sm font-bold text-[#101D33]">{step.step}</h4>
                <h3 className="mt-1 text-base font-bold text-[#101D33]">{step.title}</h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-relaxed sm:pr-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
