import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  FaBuilding,
  FaCog,
  FaFileInvoice,
  FaRegRegistered,
  FaUser,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    title: "Private Limited Company Registration",
    text: "Register your Private Limited Company with expert guidance and complete legal support.",
    href: "/services/private-limited-company",
    Icon: FaBuilding,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "LLP Registration",
    text: "Start your business with the flexibility of a Limited Liability Partnership.",
    href: "/services/llp",
    Icon: FaUsers,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "One Person Company Registration",
    text: "Register your One Person Company and begin your entrepreneurial journey easily.",
    href: "/services/one-person-company",
    Icon: FaUser,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "GST Registration",
    text: "Get GST registration and ensure your business is tax compliant.",
    href: "/services/gst",
    Icon: FaFileInvoice,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "MSME / Udyam Registration",
    text: "Register under MSME and avail benefits, subsidies and new growth opportunities.",
    href: "/services/msme-udyam",
    Icon: FaCog,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Trademark Registration",
    text: "Protect your brand with trademark registration and secure your business identity.",
    href: "/services/trademark",
    Icon: FaRegRegistered,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Services() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
              Our Services
            </p>
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
          </div>

          <h2 className="mt-1 text-3xl font-bold sm:text-4xl lg:text-5xl text-[#101D33]">
            Business Registration Solutions for Your{" "}
            <span className="text-[#F9A61A]">Future Success</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs sm:text-sm md:text-base text-slate-500 sm:text-base">
            From company registration to compliance support, we provide
            end-to-end solutions to start, manage and grow your business with
            confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, href, Icon, image }) => (
            <Link
              key={title}
              href={href}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_6px_24px_rgba(16,29,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,29,51,0.14)]"
            >
              {/* Image */}
              <div className="relative h-[190px] w-full overflow-hidden sm:h-[200px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 items-start gap-4 p-4">
                <span className="relative mb-2 block h-[78px] w-[78px] shrink-0">
                  {/* yellow base peeking out below the navy box */}
                  <span className="absolute inset-0 translate-y-1 rounded-xl bg-[#F9A61A]" />
                  <span className="relative flex h-full w-full items-center justify-center rounded-xl bg-[#101D33] text-[44px] text-[#F9A61A]">
                    <Icon />
                  </span>
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold leading-snug text-[#101D33]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F9A61A] text-xl text-[#101D33] transition group-hover:bg-[#101D33] group-hover:text-[#F9A61A]">
                  <FiArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}