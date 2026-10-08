import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/app/components/ui/animate-in";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { CorpEaseAboutSectionData, CorpEaseAboutPageDetailsData } from "@/data/index";

type AboutProps = {
  data?: CorpEaseAboutSectionData | CorpEaseAboutPageDetailsData | any;
};

export default function About({ data }: AboutProps) {
  const aboutData = data || site.about;
  if (!aboutData) return null;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-16">
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: image with colour blocks behind it */}
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
            {/* Navy block (top-left) */}
            <div className="absolute left-0 top-0 h-[150px] w-[200px] rounded-2xl bg-[#101D33] sm:h-[170px] sm:w-[230px]">
              <span className="absolute right-6 top-3 h-8 w-10 rounded-md border border-[#F9A61A]/60" />
            </div>

            {/* Yellow block (bottom-left) */}
            <div className="absolute bottom-0 left-0 h-[130px] w-[190px] rounded-2xl bg-[#F9A61A] sm:h-[150px] sm:w-[210px]">
              <span className="absolute bottom-3 left-3 h-16 w-16 rounded-2xl border border-white/60" />
            </div>

            {/* Photo */}
            <AnimateIn direction="left" delay={0.2} className="relative ml-8 mt-8 mb-8 h-[340px] overflow-hidden rounded-[36px] shadow-xl sm:ml-10 sm:h-[430px]">
              <Image
                src={aboutData.image}
                alt={aboutData.imageAlt || "About us image"}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </AnimateIn>
          </div>

          {/* Right: content */}
          <div>
            <AnimateIn direction="up" delay={0.1}>
              <div className="flex items-center gap-4">
                <span className="h-[3px] w-10 rounded-full bg-[#F9A61A]" />
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                  {aboutData.badge}
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.2}>
              <h2 className="text-4xl font-bold text-[#101D33] sm:text-5xl lg:text-6xl mt-2">
                {aboutData.titlePrefix}
                <span className="block text-[#F9A61A]">{aboutData.titleHighlight}</span>
              </h2>
            </AnimateIn>

            {aboutData.paragraphs ? (
              <div className="mt-6 space-y-5">
                {aboutData.paragraphs.map((para: string, i: number) => (
                  <p key={i} className="leading-relaxed text-slate-600 text-sm sm:text-sm md:text-base">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <p className="mt-2 max-w-[560px] leading-relaxed text-slate-600 text-sm sm:text-sm md:text-base">
                  {aboutData.description}
                </p>

                {/* Feature points */}
                <ul className="mt-4 space-y-6">
                  {aboutData.features?.map(({ no, title, text }: any, idx: number) => (
                    <AnimateIn as="li" direction="up" delay={0.3 + idx * 0.1} key={no} className="flex items-center gap-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDF1DD] text-sm font-semibold text-[#F9A61A]">
                        {no}
                      </span>
                      <span className="h-12 w-px shrink-0 bg-slate-300" />
                      <div>
                        <h3 className="text-base font-bold text-sm sm:text-sm md:text-base lg:text-[18px] text-[#101D33]">
                          {title}
                        </h3>
                        <p className=" max-w-[420px] text-sm md:text-base leading-relaxed text-slate-600">
                          {text}
                        </p>
                      </div>
                    </AnimateIn>
                  ))}
                </ul>

                {/* CTA */}
                <AnimateIn direction="up" delay={0.5}>
                  <Link
                    href={aboutData.btnLink}
                    className="mt-9 inline-flex font-bold items-center gap-3 rounded-lg bg-[#F9A61A] px-7 py-3.5 text-[15px] text-[#101D33] transition hover:bg-[#E8960F]"
                  >
                    {aboutData.btnText}
                    <FiArrowRight className="text-xl" />
                  </Link>
                </AnimateIn>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
