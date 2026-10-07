import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import type { CorpEaseServiceDetailsData } from "@/data/index";

export default function ServiceDocuments({ data }: { data: CorpEaseServiceDetailsData }) {
  if (!data) return null;

  return (
    <section className="mt-6">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        
        {/* Top Block: Documents (Left) + Image (Right) */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 lg:items-stretch">
          
          {/* Left Side: Content */}
          <div className="flex-1 w-full py-2">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
                {data.documents.badge}
              </p>
            </div>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl lg:text-[40px] text-[#101D33]">
              {data.documents.titlePrefix} <span className="text-[#F9A61A]">{data.documents.titleHighlight}</span>
            </h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-y-5 gap-x-6">
              {data.documents.list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F9A61A] text-[13px] text-white">
                    <FiCheck />
                  </span>
                  <span className="text-[15px] font-medium text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full md:w-[480px] lg:w-[460px] xl:w-[540px] shrink-0 mt-10 lg:mt-0 flex flex-col">
            {/* yellow accent behind on the left */}
            <span className="absolute -left-4 sm:-left-5 top-4 bottom-4 w-20 rounded-[20px] bg-[#F9A61A]" />
            <div className="relative h-[280px] sm:h-[340px] lg:h-auto lg:flex-1 w-full overflow-hidden rounded-[20px] shadow-lg bg-slate-100">
              <Image
                src={data.documents.image}
                alt="Documents"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 540px, (min-width: 1024px) 460px, (min-width: 768px) 480px, 100vw"
              />
            </div>
          </div>
          
        </div>

        {/* Bottom Block: Who Can Register */}
        <div className="mt-12">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
              {data.documents.footerBadge}
            </p>
          </div>
          <h2 className="mt-1 text-3xl font-bold sm:text-4xl text-[#101D33]">
            {data.documents.footerTitlePrefix} <span className="text-[#F9A61A]">{data.documents.footerTitleHighlight}</span>
          </h2>
          <p className="mt-4 text-[15px] text-slate-500 leading-relaxed max-w-[800px]">
            {data.documents.footerDescription}
          </p>
        </div>

      </div>
    </section>
  );
}
