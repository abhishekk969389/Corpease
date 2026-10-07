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

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Private Limited Company", href: "/services/private-limited-company" },
  { label: "LLP Registration", href: "/services/llp" },
  { label: "One Person Company (OPC)", href: "/services/one-person-company" },
  { label: "Partnership Firm Registration", href: "/services/partnership-firm" },
  { label: "GST Registration", href: "/services/gst" },
  { label: "MSME / Udyam Registration", href: "/services/msme-udyam" },
];

const socials = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

const contacts = [
  {
    Icon: FiMapPin,
    lines: [
      "123 Business Avenue,",
      "Connaught Place, New Delhi,",
      "Delhi 110001, India",
    ],
  },
  {
    Icon: FiPhone,
    lines: ["+91 98765 43210", "+91 11 2345 6789"],
  },
  {
    Icon: FiMail,
    lines: ["info@corpease.com", "support@corpease.com"],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

function ColumnHeading({ children }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#101D33]">{children}</h3>
      <span className="mt-2 block h-[3px] w-9 rounded-full bg-[#F9A61A]" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100/50  mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12 py-8 ">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="CorpEase - Company Registration Made Easy"
                width={315}
                height={80}
                className="h-auto w-[230px] sm:w-[280px]"
              />
            </Link>

            <p className="mt-4 max-w-[360px] text-[15px] leading-relaxed text-slate-600">
              At CorpEase, we simplify business registration with expert
              guidance, transparent processes and end-to-end support, helping
              you start, manage and grow your business with confidence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-[17px] text-[#101D33] transition hover:bg-[#F9A61A]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="mt-6 space-y-3.5">
              {quickLinks.map(({ label, href }) => (
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
          </div>

          {/* Services */}
          <div>
            <ColumnHeading>Our Services</ColumnHeading>
            <ul className="mt-6 space-y-3">
              {services.map(({ label, href }) => (
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
          </div>

          {/* Contact */}
          <div>
            <ColumnHeading>Get In Touch</ColumnHeading>
            <ul className="mt-6 space-y-5">
              {contacts.map(({ Icon, lines }) => (
                <li key={lines[0]} className="flex items-center gap-4">
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
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row lg:px-14 xl:px-12">
          <p className="text-[15px] text-slate-700">
            © 2026 <span className="font-semibold text-[#F9A61A]">CorpEase</span>
            . All Rights Reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-y-2 text-sm text-[#101D33]">
            {legalLinks.map(({ label, href }, i) => (
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