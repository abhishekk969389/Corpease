import Link from "next/link";
import {
  FiCheck,
  FiArrowRight,
  FiSearch,
  FiMessageSquare,
  FiFileText,
  FiBookOpen,
} from "react-icons/fi";

import { site } from "@/data/index";
import type { CorpEaseThankYouData } from "@/data/index";
import AnimateIn from "@/app/components/ui/animate-in";

const iconMap: Record<string, React.ElementType> = {
  FiSearch,
  FiMessageSquare,
  FiFileText,
  FiBookOpen,
};

const CONTAINER = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12";

/* little burst lines around the check circle: [position classes, rotation, colour] */
const rays = [
  ["left-[6%] top-[10%]", "rotate-[40deg]", "bg-[#101D33]"],
  ["left-[-6%] top-[38%]", "rotate-[20deg]", "bg-[#F9A61A]"],
  ["left-[10%] top-[28%]", "rotate-[35deg]", "bg-[#F9A61A]"],
  ["left-[2%] top-[62%]", "-rotate-[60deg]", "bg-[#B8651B]"],
  ["right-[6%] top-[10%]", "-rotate-[40deg]", "bg-[#101D33]"],
  ["right-[-6%] top-[38%]", "-rotate-[20deg]", "bg-[#F9A61A]"],
  ["right-[10%] top-[28%]", "-rotate-[35deg]", "bg-[#F9A61A]"],
  ["right-[2%] top-[62%]", "rotate-[60deg]", "bg-[#B8651B]"],
];

export default function ThankYouSection({ data }: { data?: CorpEaseThankYouData }) {
  const tyData = data || site.thankYouSec;
  if (!tyData) return null;

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className={CONTAINER}>
        {/* ---------- Success message ---------- */}
        <div className="mx-auto max-w-[760px] text-center">
          <style>{`
            @keyframes ty-ripple {
              0%   { transform: scale(0.75); opacity: 0.55; }
              100% { transform: scale(1.9);  opacity: 0; }
            }
            @keyframes ty-glow {
              0%, 100% { box-shadow: 0 -12px 28px rgba(249,166,26,.18), 0 12px 28px rgba(249,166,26,.18); }
              50%      { box-shadow: 0 -22px 44px rgba(249,166,26,.45), 0 22px 44px rgba(249,166,26,.45); }
            }
            @keyframes ty-pop {
              0%   { transform: scale(0.4); opacity: 0; }
              70%  { transform: scale(1.08); opacity: 1; }
              100% { transform: scale(1); }
            }
            @keyframes ty-draw {
              from { stroke-dashoffset: 30; }
              to   { stroke-dashoffset: 0; }
            }
            @keyframes ty-ray {
              0%, 100% { opacity: 0.25; transform: scaleY(0.7); }
              50%      { opacity: 1;    transform: scaleY(1.25); }
            }
            .ty-ripple { animation: ty-ripple 2.4s ease-out infinite; }
            .ty-glow   { animation: ty-glow 2.4s ease-in-out infinite; }
            .ty-pop    { animation: ty-pop 0.7s cubic-bezier(.34,1.56,.64,1) both; }
            .ty-check polyline { stroke-dasharray: 30; animation: ty-draw 0.6s 0.5s ease-out both; }
            .ty-ray    { animation: ty-ray 1.8s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .ty-ripple, .ty-glow, .ty-pop, .ty-ray, .ty-check polyline { animation: none; }
            }
          `}</style>

          <AnimateIn direction="up" delay={0.1}>
            <div className="relative mx-auto h-28 w-44 sm:h-32 sm:w-52">
              {rays.map(([pos, rot, color], i) => (
                <span
                  key={i}
                  className={`ty-ray absolute h-3 w-[3px] rounded-full ${pos} ${rot} ${color}`}
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
              ))}

              {/* ripple rings */}
              <span className="ty-ripple absolute left-1/2 top-1/2 h-24 w-24 -ml-12 -mt-12 rounded-full bg-[#F9A61A]/30 sm:h-28 sm:w-28 sm:-ml-14 sm:-mt-14" />
              <span
                className="ty-ripple absolute left-1/2 top-1/2 h-24 w-24 -ml-12 -mt-12 rounded-full bg-[#F9A61A]/30 sm:h-28 sm:w-28 sm:-ml-14 sm:-mt-14"
                style={{ animationDelay: "1.2s" }}
              />

              {/* glowing circle (yellow shadow above & below) */}
              <span className="ty-glow absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFF3DF] sm:h-28 sm:w-28">
                <span className="ty-pop flex h-16 w-16 items-center justify-center rounded-full bg-[#FFE7C2] text-4xl text-[#F9A61A] sm:h-20 sm:w-20">
                  <FiCheck strokeWidth={3} className="ty-check" />
                </span>
              </span>
            </div>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.2}>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl lg:text-5xl text-[#101D33]">
              {tyData.titlePrefix} <span className="text-[#F9A61A]">{tyData.titleHighlight}</span>
            </h2>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.3}>
            <h3 className="mt-3 text-base font-bold text-[#101D33] sm:text-lg md:text-xl">
              {tyData.subtitle}
            </h3>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.4}>
            <p className="mx-auto mt-2 max-w-[640px] text-xs sm:text-sm md:text-base text-slate-500">
              {tyData.description}
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.5}>
            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#101D33] px-8 py-3.5 text-sm font-semibold text-[#F9A61A] transition hover:bg-[#F9A61A] hover:text-[#101D33]"
            >
              Back to Home <FiArrowRight />
            </Link>
          </AnimateIn>
        </div>

        {/* ---------- Quick links ---------- */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tyData.cards.map(({ icon, title, text, cta, href }, idx) => {
            const Icon = iconMap[icon] || FiSearch;
            return (
            <AnimateIn
              direction="up" delay={0.3 + idx * 0.1}
              key={title}
              className="flex flex-col h-full rounded-lg border border-slate-100 bg-white p-5 shadow-sm"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1DC] text-2xl text-[#F9A61A]">
                <Icon className="h-8 w-8" />
              </span>

              <h4 className="mt-3 text-base font-bold text-[#101D33]">
                {title}
              </h4>
              <p className="mt-1 flex-1 text-sm md:text-base leading-snug text-slate-500">
                {text}
              </p>

              <Link
                href={href}
                className="mt-4 inline-flex w-fit items-center gap-2 border-b-2 border-[#F9A61A] pb-0.5 text-sm md:text-base font-semibold text-[#101D33] transition hover:gap-3"
              >
                {cta} <FiArrowRight />
              </Link>
            </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}