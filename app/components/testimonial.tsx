"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, Mehta Traders",
    text: "The team at CorpEase made my Private Limited company registration completely hassle-free. Their guidance and support were excellent from start to finish. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Priya Sharma",
    role: "CEO, Sharma Enterprises",
    text: "I registered my LLP with CorpEase and the entire process was smooth and transparent. The team is very professional, responsive and always available for support.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Amit Verma",
    role: "Managing Director, Verma Solutions",
    text: "Great experience with CorpEase. They handled my business registration efficiently and kept me updated at every step. Truly professional and reliable service.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Neha Kapoor",
    role: "Founder, Kapoor Designs",
    text: "From GST registration to trademark filing, CorpEase took care of everything. The paperwork was done quickly and I never had to chase anyone for updates.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Director, Singh Logistics",
    text: "Their MSME registration support helped us unlock benefits we did not even know about. Clear communication and a very knowledgeable team throughout.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Anjali Desai",
    role: "Co-founder, Desai Foods",
    text: "Starting a company felt overwhelming until I found CorpEase. They explained every step in simple words and completed my registration ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Rohit Gupta",
    role: "Owner, Gupta Electronics",
    text: "Affordable pricing, quick turnaround and genuinely helpful support. I have already recommended CorpEase to two friends who are starting their own businesses.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Sneha Iyer",
    role: "CEO, Iyer Consulting",
    text: "CorpEase handled our One Person Company registration and compliance setup smoothly. Their team is responsive and always ready to answer questions.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
  {
    name: "Karan Malhotra",
    role: "Managing Partner, Malhotra & Co.",
    text: "A dependable partner for all our registration needs. Documentation was accurate, deadlines were met and the whole experience was stress-free.",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&crop=faces&w=240&h=240&q=80",
  },
];

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

  const pages = Math.ceil(testimonials.length / perView);
  const current = Math.min(page, pages - 1);
  // last page never leaves empty space on the right
  const firstItem = Math.min(current * perView, testimonials.length - perView);

  return (
    <section className="w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
              Client Testimonials
            </p>
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
          </div>

          <h2 className="mt-1 text-3xl font-bold text-[#101D33] sm:text-4xl lg:text-5xl">
            What Our Clients Say About{" "}
            <span className="text-[#F9A61A]">CorpEase</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base">
            Trusted by entrepreneurs and businesses across India for smooth,
            reliable and hassle-free company registration services.
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
            {testimonials.map(({ name, role, text, image }) => (
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
                        src={image}
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
                    “{text}”
                  </p>

                  <div className="relative mt-4 flex items-center justify-between">
                    <div
                      className="flex gap-1 text-lg text-[#E39A12]"
                      aria-label="Rated 4.5 out of 5"
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
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
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
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