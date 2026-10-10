import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { site } from "@/data/index";
import type { CorpEaseFooterData } from "@/data/index";
import AnimateIn from "@/app/components/ui/animate-in";

const footerData: CorpEaseFooterData = site.footer as CorpEaseFooterData;

const socialIconMap: Record<string, React.ElementType> = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
};

const contactIconMap: Record<string, React.ElementType> = {
  FiMapPin,
  FiPhone,
  FiMail,
};

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#101D33]">{children}</h3>
      <span className="mt-2 block h-[3px] w-9 rounded-full bg-[#F9A61A]" />
    </div>
  );
}

export default function Footer() {
  if (!footerData) return null;

  return (
    <footer className="w-full bg-gray-100/50  mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12 py-8 ">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr] lg:gap-8">
          {/* Brand */}
          <AnimateIn direction="up" delay={0.1}>
            <Link href="/" className="inline-block">
              <Image
                src={footerData.brand.logo}
                alt={footerData.brand.alt || "Logo"}
                width={315}
                height={80}
                className="h-auto w-[230px] sm:w-[280px]"
              />
            </Link>

            <p className="mt-4 max-w-[360px] text-[15px] leading-relaxed text-slate-600">
              {footerData.brand.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {footerData.socialLinks?.map(({ platform, url, icon }) => {
                const Icon = socialIconMap[icon] || FaFacebookF;
                return (
                  <a
                    key={platform}
                    href={url}
                    aria-label={platform}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-[17px] text-[#101D33] transition hover:bg-[#F9A61A]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </AnimateIn>

          {/* Quick links */}
          <AnimateIn direction="up" delay={0.2}>
            <ColumnHeading>{footerData.quickLinks.title}</ColumnHeading>
            <ul className="mt-6 space-y-3.5">
              {footerData.quickLinks.links?.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-3 text-[15px] text-[#101D33] transition hover:text-[#E39A12]"
                  >
                    <FaChevronRight className="text-[11px] text-[#F9A61A]" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Services */}
          <AnimateIn direction="up" delay={0.3}>
            <ColumnHeading>{footerData.ourServices.title}</ColumnHeading>
            <ul className="mt-6 space-y-3">
              {footerData.ourServices.links?.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-3 text-[15px] text-[#101D33] transition hover:text-[#E39A12]"
                  >
                    <FaChevronRight className="text-[11px] text-[#F9A61A]" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Contact */}
          <AnimateIn direction="up" delay={0.4}>
            <ColumnHeading>{footerData.contactInfo.title}</ColumnHeading>
            <ul className="mt-6 space-y-5">
              {footerData.contactInfo.items?.map(({ id, icon, lines }) => {
                const Icon = contactIconMap[icon] || FiMapPin;
                return (
                  <li key={id} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[22px] text-[#F9A61A]">
                      <Icon />
                    </span>
                    <address className="not-italic text-[15px] leading-snug text-[#101D33]">
                      {lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </li>
                );
              })}
            </ul>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#101D33]/93">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row lg:px-14 xl:px-12">
          <p className="text-[15px] text-white">
            {footerData.bottomBar.copyrightPrefix}{" "}
            <span className="font-semibold text-[#F9A61A]">{footerData.bottomBar.brandName}</span>
            {footerData.bottomBar.copyrightSuffix}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-y-2 text-sm text-white">
            {footerData.bottomBar.legalLinks?.map(({ label, href }, i) => (
              <li key={label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-4 h-4 w-px bg-slate-400" aria-hidden="true" />
                )}
                <Link href={href} className="transition hover:text-[#E39A12]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
