"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { site } from "@/data/index";
import type { CorpEaseTestimonialData } from "@/data/index";

const testimonialData: CorpEaseTestimonialData = site.testimonialSec as CorpEaseTestimonialData;

function usePerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setPerView(3);
      else if (window.matchMedia("(min-width: 640px)").matches) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

export default function Testimonials() {
  const perView = usePerView();
  const [page, setPage] = useState(0);

  if (!testimonialData) return null;

  const pages = Math.ceil((testimonialData.testimonials?.length || 0) / perView);
  const current = Math.min(page, pages - 1);
  // last page never leaves empty space on the right
  const firstItem = Math.min(current * perView, (testimonialData.testimonials?.length || 0) - perView);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    return stars;
  };

  return (
    <section className="w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
              {testimonialData.badge}
            </p>
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
          </div>

          <h2 className="mt-1 text-3xl font-bold text-[#101D33] sm:text-4xl lg:text-5xl">
            {testimonialData.titlePrefix}{" "}
            <span className="text-[#F9A61A]">{testimonialData.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base">
            {testimonialData.description}
          </p>
        </div>

        {/* Slider */}
        <div className="mt-6 overflow-hidden pb-6 pt-2">
          <div
            className="-mx-3 flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${firstItem * (100 / perView)}%)`,
            }}
          >
            {testimonialData.testimonials?.map(({ name, role, comment, avatar, rating }) => (
              <div
                key={name}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <article className="relative h-full overflow-hidden rounded-xl border border-slate-100 bg-white p-6 shadow-[0_6px_24px_rgba(16,29,51,0.08)]">
                  {/* faint dotted pattern */}
                  <span className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-70 [background-image:radial-gradient(#d9dee7_1.2px,transparent_1.2px)] [background-size:9px_9px] [mask-image:radial-gradient(circle_at_70%_40%,black,transparent_70%)]" />

                  <div className="relative flex items-center gap-4">
                    <div className="relative h-[88px] w-[88px] shrink-0">
                      <Image
                        src={avatar}
                        alt={name}
                        width={88}
                        height={88}
                        className="h-full w-full rounded-full object-cover"
                      />
                      <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E39A12] text-xs text-white">
                        <FaQuoteLeft />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#101D33]">
                        {name}
                      </h3>
                      <p className="mt-0.5 text-sm text-[#E39A12]">{role}</p>
                    </div>
                  </div>

                  <p className="relative mt-5 text-[15px] leading-relaxed text-slate-700">
                    “{comment}”
                  </p>

                  <div className="relative mt-4 flex items-center justify-between">
                    <div
                      className="flex gap-1 text-lg text-[#E39A12]"
                      aria-label={`Rated ${rating} out of 5`}
                    >
                      {renderStars(rating)}
                    </div>
                    <FaQuoteRight className="text-5xl text-slate-200" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-2 flex items-center justify-center gap-2.5">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to testimonials page ${i + 1}`}
              aria-current={i === current}
              className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
                i === current
                  ? "bg-[#E39A12]"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
