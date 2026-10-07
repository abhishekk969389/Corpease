import Image from "next/image";
import { FiCalendar, FiUser, FiFolder, FiCheckCircle } from "react-icons/fi";
import * as Icons from "react-icons/fi";
import type { CorpEaseBlogDetailsData } from "@/data/index";

export default function BlogContent({ data }: { data: CorpEaseBlogDetailsData }) {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-sm">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
        <div className="flex items-center gap-2">
          <FiCalendar className="text-[#F9A61A] h-5 w-5" />
          <span>{data.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiUser className="text-[#F9A61A] h-5 w-5" />
          <span>By {data.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiFolder className="text-[#F9A61A] h-5 w-5" />
          <span>{data.category}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#101D33]">
        {data.title}
      </h1>

      {/* Intro */}
      <div className="text-slate-600 leading-relaxed text-sm md:text-base">
        {data.content.intro}
        
      </div>

      {/* First Section */}
      {data.content.sections.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#101D33]">
            {data.content.sections[0].title}
                <div className="w-12 mt-1 h-[3px] bg-[#F59E0B] rounded-full"></div>
          </h2>
          {data.content.sections[0].paragraphs.map((p, pIdx) => (
            <p key={pIdx} className="text-slate-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}

      {/* Benefits Grid (If present) */}
      {data.content.benefits && (
        <div className="flex flex-col gap-6 mt-4">
          <h2 className="text-2xl font-bold text-[#101D33]">
            {data.content.benefits.title}
                <div className="w-12 mt-2 h-[3px] bg-[#F59E0B] rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.content.benefits.items.map((item, idx) => {
              const Icon = (Icons as any)[item.icon] || FiCheckCircle;
              return (
                <div key={idx} className="flex gap-4 items-start p-6 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF5E6] text-[#F9A61A] text-3xl">
                    <Icon/>
                  </div>
                  <div>
                    <h3 className="text-[#101D33] font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Remaining Sections */}
      {data.content.sections.slice(1).map((section, idx) => (
        <div key={idx} className="flex flex-col gap-4 mt-4">
          <h2 className="text-2xl font-bold text-[#101D33]">
            {section.title}
            <div className="w-12 mt-1 h-[3px] bg-[#F59E0B] rounded-full"></div>
          </h2>
          {section.paragraphs.map((p, pIdx) => (
            <p key={pIdx} className="text-slate-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
