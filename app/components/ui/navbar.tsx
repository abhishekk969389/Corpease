"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { site } from "@/data/index";
import type { CorpEaseHeaderData } from "@/data/index";

const headerData: CorpEaseHeaderData = site.navbar as CorpEaseHeaderData;

/* Left-corner diagonal shape: navy block + yellow stripe, fading out at the bottom */
function CornerShape() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 104"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 top-0 hidden h-full w-[96px] lg:block"
    >
      <defs>
        <linearGradient id="navyFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#101D33" />
          <stop offset="0.7" stopColor="#101D33" />
          <stop offset="1" stopColor="#101D33" />
        </linearGradient>
        <linearGradient id="yellowFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F2A431" />
          <stop offset="0.8" stopColor="#F2A431" />
          <stop offset="1" stopColor="#F2A431" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* navy triangle */}
      <polygon points="0,0 22,0 78,104 0,104" fill="url(#navyFade)" />
      {/* yellow diagonal stripe on its right edge */}
      <polygon points="22,0 38,0 94,104 78,104" fill="url(#yellowFade)" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (!headerData) return null;

  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden bg-white shadow-sm">
      <CornerShape />

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[88px] items-center lg:h-[104px]">
          {/* Logo (left, pushed right of the corner shape on desktop) */}
          <Link href="/" className="flex shrink-0 items-center lg:ml-14">
            <Image
              src={headerData.logo.src}
              alt={headerData.logo.alt}
              width={headerData.logo.width}
              height={headerData.logo.height}
              priority
              className="h-auto w-[200px] sm:w-[250px] lg:w-[315px]"
            />
          </Link>

          {/* Desktop links (aligned right) */}
          <nav className="hidden flex-1 items-center justify-end gap-10 lg:flex mr-8 xl:mr-12">
            {headerData.navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-sm sm:text-sm md:text-base lg:text-[18px] text-[#1F2A3C] transition-colors hover:text-[#E8A02F] ${
                  isActive(href) ? "font-semibold" : "font-semibold"
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#E8A02F]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA (right) */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href={headerData.ctaButton.href}
              className="hidden items-center gap-3 rounded-xl bg-[#F2A431] px-7 py-4 text-[16px] font-semibold text-[#1F2A3C] transition hover:bg-[#E8A02F] sm:inline-flex"
            >
              {headerData.ctaButton.label}
              <FiArrowRight className="text-xl" />
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-[#1F2A3C] lg:hidden"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="relative z-10 border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col">
              {headerData.navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-gray-100 py-3 text-[16px] ${
                    isActive(href)
                      ? "font-semibold text-[#E8A02F]"
                      : "text-[#1F2A3C]"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href={headerData.ctaButton.href}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-xl bg-[#F2A431] px-6 py-3.5 font-semibold text-[#1F2A3C]"
              >
                {headerData.ctaButton.label}
                <FiArrowRight className="text-xl" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
