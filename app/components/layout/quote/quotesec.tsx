"use client";

import { useState, type FormEvent } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiEdit2,
  FiFileText,
  FiLock,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import {
  FaBuilding,
  FaFileAlt,
  FaFileInvoice,
  FaHandshake,
  FaRegRegistered,
  FaUserTie,
} from "react-icons/fa";
import { site } from "@/data/index";
import type { CorpEaseQuoteData } from "@/data/index";

const iconMap: Record<string, React.ElementType> = {
  FaBuilding,
  FaFileAlt,
  FaFileInvoice,
  FaHandshake,
  FaRegRegistered,
  FaUserTie,
};

const fieldClass =
  "w-full rounded-lg border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#101D33] outline-none transition placeholder:text-slate-500 focus:border-[#F9A61A] focus:ring-2 focus:ring-[#F9A61A]/30 md:text-base";

const iconClass =
  "pointer-events-none absolute left-4 text-lg text-[#101D33]";

export default function Quote({ data }: { data?: CorpEaseQuoteData }) {
  const quoteData = data || site.quoteSec;
  const [sent, setSent] = useState(false);
  
  if (!quoteData) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: send `data` to your API route / email service here
    console.log("Quote request:", data);

    form.reset();
    setSent(true);
  };

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: form */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
                {quoteData.form.badge}
              </p>
            </div>

            <h2 className="mt-1 text-3xl font-bold sm:text-4xl lg:text-5xl text-[#101D33]">
              {quoteData.form.titlePrefix} <span className="text-[#F9A61A]">{quoteData.form.titleHighlight}</span>
            </h2>

            <p className="mt-2 max-w-[560px] text-xs sm:text-sm md:text-base text-slate-500">
              {quoteData.form.description}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-1 flex-col rounded-xl bg-slate-50 p-4 sm:p-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative flex items-center">
                  <FiUser className={iconClass} />
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full Name *"
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>
                <div className="relative flex items-center">
                  <FiPhone className={iconClass} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number *"
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="relative mt-4 flex items-center">
                <FiMail className={iconClass} />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address *"
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>

              <div className="relative mt-4 flex items-center">
                <FiFileText className={iconClass} />
                <select
                  name="service"
                  required
                  defaultValue=""
                  className={`${fieldClass} appearance-none pr-11 invalid:text-slate-500`}
                >
                  <option value="" disabled>
                    Type of Service *
                  </option>
                  {quoteData.form.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-4 text-xl text-[#101D33]" />
              </div>

              <div className="relative mt-4 flex flex-1">
                <FiEdit2 className={`${iconClass} top-4`} />
                <textarea
                  name="requirements"
                  required
                  rows={5}
                  placeholder="Your Requirements *"
                  className={`${fieldClass} h-full min-h-[140px] resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#101D33] px-6 py-4 text-base font-bold text-[#F9A61A] transition hover:bg-[#0A1530]"
              >
                Submit Request
                <FiArrowRight className="text-xl" />
              </button>

              {sent && (
                <p
                  role="status"
                  className="mt-4 rounded-lg bg-[#FDF1DD] px-4 py-3 text-center text-sm font-medium text-[#101D33]"
                >
                  Thank you! Our team will contact you shortly.
                </p>
              )}

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-600 sm:text-sm">
                <FiLock className="shrink-0 text-base text-[#101D33]" />
                Your information is 100% secure with us. We never share your
                details.
              </p>
            </form>
          </div>

          {/* Right: services */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
                {quoteData.services.badge}
              </p>
            </div>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl lg:text-4xl text-[#101D33]">
              {quoteData.services.titlePrefix}
            </h2>

            <p className="mt-2 max-w-[560px] text-xs sm:text-sm md:text-base text-slate-500">
              {quoteData.services.description}
            </p>

            <div className="mt-6 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
              {quoteData.services.helpCards.map(({ title, text, icon }) => {
                const Icon = iconMap[icon] || FaBuilding;
                return (
                <div
                  key={title}
                  className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-3 py-3.5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(16,29,51,0.10)]"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDF1DD] text-[22px] text-[#F9A61A]">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-2 text-[15px] font-bold leading-snug text-[#101D33]">
                    {title}
                  </h3>
                  <p className="mt-0.5 max-w-[240px] text-[13px] leading-snug text-slate-500">
                    {text}
                  </p>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}