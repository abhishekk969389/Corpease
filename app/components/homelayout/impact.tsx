"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiPackage,
  FiRepeat,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import { site } from "@/data/index";
import type { CorpEaseStatsData } from "@/data/index";
import AnimateIn from "@/app/components/ui/animate-in";

const statsData: CorpEaseStatsData = site.stats as CorpEaseStatsData;

const iconMap: Record<string, React.ElementType> = {
  FiUsers,
  FiUserCheck,
  FiRepeat,
  FiPackage,
};

function SimpleCounter({ value }: { value: string | number }) {
  const [count, setCount] = useState(0);
  const rawString = String(value);

  // Extract number and prefix/suffix (+, %, etc.)
  const match = rawString.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!match || target <= 0) return;

    // Direct constant step count (0 se start ho kar seedha target tak bina kisi animation curve ke)
    const totalSteps = 60;
    const stepValue = Math.ceil(target / totalSteps) || 1;
    const intervalTime = 30; // 30ms interval

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + stepValue >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + stepValue;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target, match]);

  if (!match) return <span>{rawString}</span>;

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  if (!statsData) return null;

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Full-width background image part */}
      <div className="relative isolate w-full overflow-hidden bg-[#0A1530]">
        <Image
          src={statsData.bgImage}
          alt={statsData.bgImageAlt}
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A1530]/90 via-[#0A1530]/75 to-[#0A1530]/60" />

        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
          <div className="flex flex-col gap-8 pb-[140px] pt-14 lg:flex-row lg:items-start lg:justify-between lg:pt-16">
            <div>
              <AnimateIn direction="up" delay={0.1}>
                <div className="flex items-center gap-4">
                  <span className="h-[2px] w-10 bg-[#3B8BFF]" />
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/90 sm:text-sm">
                    {statsData.badge}
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn direction="up" delay={0.2}>
                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {statsData.titlePrefix}
                  <span className="block">
                    <span  className="text-[#F9A61A]">{statsData.titleHighlight}</span> {statsData.titleSuffix}
                  </span>
                </h2>
              </AnimateIn>
            </div>

            <AnimateIn direction="up" delay={0.3}>
              <Link
                href={statsData.ctaButton.href}
                className="inline-flex w-fit items-center gap-4 rounded-md bg-[#F9A61A] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-black transition  lg:mt-3"
              >
                {statsData.ctaButton.label}
                <FiArrowRight className="text-xl" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Cards overlapping the image */}
      <div className="mx-auto max-w-[1320px] px-4 pb-16 sm:px-6 lg:px-14 xl:px-12">
        <div className="relative z-10 -mt-[100px] grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.stats?.map(({ value, label, icon }, idx) => {
            const Icon = iconMap[icon] || FiUsers;
            return (
              <AnimateIn
                key={label}
                direction="up"
                delay={0.2 + idx * 0.1}
                className="group relative mt-11 rounded-xl bg-white px-6 pb-8 pt-16 text-center shadow-[0_10px_30px_rgba(15,27,61,0.10)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon circle */}
                <div className="absolute -top-11 left-1/2 -translate-x-1/2">
                  <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-[5px]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 88 88"
                      className="absolute inset-0 h-full w-full -rotate-90"
                    >
                      <circle
                        cx="44"
                        cy="44"
                        r="42.5"
                        fill="none"
                        stroke="#F9A61A"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="100"
                        className="[stroke-dashoffset:100] transition-[stroke-dashoffset] duration-700 ease-out group-hover:[stroke-dashoffset:0]"
                      />
                    </svg>
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-[#F9A61A] text-white">
                      <Icon className="text-[34px] text-black" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>

                <p className="text-5xl font-extrabold tracking-tight text-[#0A1530]">
                  <SimpleCounter value={value} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-600">
                  {label}
                </p>
                <span className="mx-auto mt-5 block h-[3px] w-10 rounded-full bg-[#F9A61A] transition-all duration-300 group-hover:w-20" />
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}