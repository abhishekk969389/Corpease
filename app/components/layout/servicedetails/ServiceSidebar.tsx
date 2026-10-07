"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight, FiPhoneCall, FiMail } from "react-icons/fi";
import { site } from "@/data/index";

export default function ServiceSidebar() {
  const pathname = usePathname();
  const sidebarData = site.serviceSidebar;
  const servicesList = site.ourServices.services;

  return (
    <div className="flex flex-col gap-8">
      {/* Our Services Menu */}
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-6">
        <h3 className="mb-6 text-xl font-bold text-[#101D33] border-b border-slate-200 pb-4">
          {sidebarData.title}
             <div className="w-12 mt-2 h-[3px] bg-[#F59E0B] rounded-full"></div>
        </h3>
        <ul className="flex flex-col gap-3">
          {servicesList.map((service) => {
            const isActive = pathname === service.link;
            return (
              <li key={service.id}>
                <Link
                  href={service.link}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#101D33] text-[#F9A61A]"
                      : "bg-white text-[#101D33] hover:bg-[#101D33] hover:text-white"
                  }`}
                >
                  {service.title}
                  <FiChevronRight className={`text-lg ${isActive ? "text-[#F9A61A]" : "text-slate-400"}`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

    {/* Need Assistance Card */}
<div className="relative overflow-hidden rounded-2xl bg-[#101D33] p-7 sm:p-8 text-white shadow-xl">
  {/* Background decorative circles */}
  <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#1A2C4D]/60 blur-xl" />
  <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#1A2C4D]/60 blur-xl" />

  <div className="relative z-10 flex flex-col gap-6">
    {/* Header & Underline */}
    <div>
      <h3 className="text-xl font-bold tracking-tight text-white">
        {sidebarData.assistance.title}
      </h3>
      <div className="mt-2.5 h-[3px] w-12 rounded-full bg-[#F59E0B]" />
    </div>

    {/* Description */}
    <p className="text-sm leading-relaxed text-slate-300">
      {sidebarData.assistance.description}
    </p>

    {/* Contact Details */}
    <div className="flex flex-col gap-4">
      {/* Phone Item */}
      <div className="flex items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#182844] text-[#F59E0B] transition-transform">
          <FiPhoneCall className="text-lg" />
        </span>
        <div className="flex flex-col gap-0.5">
          {sidebarData.assistance.phone.map((p, i) => (
            <span key={i} className="text-sm font-semibold text-white tracking-wide">
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Email Item */}
      <div className="flex items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#182844] text-[#F59E0B] transition-transform">
          <FiMail className="text-lg" />
        </span>
        <div className="flex flex-col gap-0.5">
          {sidebarData.assistance.email.map((e, i) => (
            <span key={i} className="text-sm font-semibold text-white break-all">
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
