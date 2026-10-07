"use client";

import { useState } from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiBriefcase,
  FiMessageSquare,
  FiSend,
  FiLock,
  FiMapPin,
  FiClock,
  FiNavigation,
  FiChevronDown,
} from "react-icons/fi";

import { FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const CONTAINER = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12";

import { site } from "@/data/index";
import type { CorpEaseContactSecData } from "@/data/index";

const iconMap: Record<string, React.ElementType> = {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FiMail,
  FiClock,
};

/* Same heading block used on BOTH sides so the size always matches */
function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="h-[2px] w-10 bg-[#F9A61A]" />
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-1 text-3xl font-bold sm:text-4xl text-[#101D33]">
        {title} <span className="text-[#F9A61A]">{accent}</span>
      </h2>
      <p className="mt-2 max-w-[520px] text-xs sm:text-sm md:text-base text-slate-500">
        {description}
      </p>
    </div>
  );
}

const fieldWrap =
  "flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-[#F9A61A] focus-within:ring-2 focus-within:ring-[#F9A61A]/20";
const fieldInput =
  "w-full bg-transparent py-3.5 text-sm text-[#101D33] placeholder:text-slate-400 outline-none";

export default function ContactSection({ data }: { data?: CorpEaseContactSecData }) {
  const contactData = data || site.contactSec;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  if (!contactData) return null;

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // TODO: connect your API here
  };

  return (
    <section className="bg-white">
      {/* ---------- Form + Contact info ---------- */}
      <div className={`${CONTAINER} mt-8 sm:mt-10 md:mt-12 lg:mt-14`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: form */}
          <div className="flex flex-col">
            <SectionHeading
              eyebrow={contactData.form.badge}
              title={contactData.form.titlePrefix}
              accent={contactData.form.titleHighlight}
              description={contactData.form.description}
            />

            <form
              onSubmit={onSubmit}
              className="mt-6 flex flex-1 flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={fieldWrap}>
                  <FiUser className="shrink-0 text-lg text-[#F9A61A]" />
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Full Name"
                    className={fieldInput}
                    required
                  />
                </label>
                <label className={fieldWrap}>
                  <FiPhone className="shrink-0 text-lg text-[#F9A61A]" />
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Phone Number"
                    className={fieldInput}
                    required
                  />
                </label>
              </div>

              <label className={fieldWrap}>
                <FiMail className="shrink-0 text-lg text-[#F9A61A]" />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Email Address"
                  className={fieldInput}
                  required
                />
              </label>

              <label className={`${fieldWrap} relative`}>
                <FiBriefcase className="shrink-0 text-lg text-[#F9A61A]" />
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className={`${fieldInput} appearance-none pr-6 ${
                    form.service ? "" : "text-slate-400"
                  }`}
                  required
                >
                  <option value="" disabled>
                    Type of Service
                  </option>
                  {contactData.services.map((s) => (
                    <option key={s} value={s} className="text-[#101D33]">
                      {s}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-4 text-slate-400" />
              </label>

              <label className={`${fieldWrap} flex-1 items-stretch`}>
                <FiMessageSquare className="mt-4 shrink-0 text-lg text-[#F9A61A]" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Your Message"
                  rows={4}
                  className={`${fieldInput} min-h-[120px] resize-none`}
                />
              </label>

              <button
                type="submit"
                className="flex w-full text-yellow-500 items-center justify-center gap-2 rounded-lg bg-[#101D33] px-6 py-4 text-sm md:text-base font-semibold text-white transition hover:bg-[#F9A61A] hover:text-[#101D33]"
              >
                Send Message <FiSend />
              </button>

              <p className="flex items-center gap-2 flex justify-center text-sm md:text-base text-slate-500">
                <FiLock className="text-[#F9A61A]" />
                Your information is 100% secure with us. We never share your
                data.
              </p>
            </form>
          </div>

          {/* RIGHT: contact info */}
          <div>
            <SectionHeading
              eyebrow={contactData.info.badge}
              title={contactData.info.titlePrefix}
              accent={contactData.info.titleHighlight}
              description={contactData.info.description}
            />

            <ul className="mt-6 space-y-2">
              {contactData.info.contactItems.map(({ icon, label, lines, note }) => {
                const Icon = iconMap[icon] || FaPhoneAlt;
                return (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-lg bg-slate-50 px-4 py-3"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF1DC] text-xl text-[#F9A61A] sm:h-16 sm:w-16 sm:text-2xl">
                    <Icon />
                  </span>
                  <div className="text-sm text-[#101D33] sm:text-base">
                    <p className="mb-1 font-bold">{label}</p>
                    {lines.map((l) => (
                      <p key={l} className="leading-relaxed">
                        {l}
                      </p>
                    ))}
                    {note && (
                      <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        {note}
                      </p>
                    )}
                  </div>
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Full-width map + office card (card sits inside container) ---------- */}
      <div className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <iframe
          src={contactData.map.iframeSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          className="block h-[520px] w-full sm:h-[450px]"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Our office location"
        />

        {/* overlay is click-through so the map stays usable */}
      <div className="pointer-events-none absolute inset-0 mt-6">
  <div className={`${CONTAINER} flex h-full items-end sm:items-center`}>
    {/* max-w-[420px] ya max-w-md aur px-8 se card horizontally bada ho jayega */}
    <div className="pointer-events-auto mb-4 w-full max-w-[420px] rounded-2xl bg-white px-8 py-6 shadow-2xl sm:mb-0">
      <SectionHeading
        eyebrow={contactData.map.cardBadge}
        title={contactData.map.cardTitlePrefix}
        accent={contactData.map.cardTitleHighlight}
        description={contactData.map.cardDescription}
      />

      <div className="mt-4 flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F9A61A]/15 text-lg text-[#F9A61A]">
          <FiMapPin className="h-6 w-6" />
        </span>
        <p className="text-sm text-slate-600">
          {contactData.map.addressLines[0]}
          <br />
          {contactData.map.addressLines[1]}
        </p>
      </div>

      <a
        href={contactData.map.directionsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#F9A61A] px-8 py-3 text-sm font-semibold text-[#101D33] transition hover:bg-[#F9A61A]"
      >
         Get Directions <FaArrowRight />
      </a>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}