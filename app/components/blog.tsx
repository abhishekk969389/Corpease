import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const posts = [
  {
    title: "A Complete Guide to Private Limited Company Registration",
    text: "Learn the process, benefits and key requirements for registering a Private Limited Company in India.",
    date: "Oct 12, 2024",
    author: "Admin",
    href: "/blogs/private-limited-company-registration-guide",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "LLP Registration: Benefits, Process and Compliance",
    text: "Discover why an LLP is the right choice for your business and how to register it with ease.",
    date: "Oct 08, 2024",
    author: "Admin",
    href: "/blogs/llp-registration-benefits-process-compliance",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Trademark Registration: Protect Your Brand Identity",
    text: "Know the importance of trademark registration and how it helps secure your brand in the competitive market.",
    date: "Oct 05, 2024",
    author: "Admin",
    href: "/blogs/trademark-registration-protect-your-brand",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Blog() {
  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
              Latest News
            </p>
            <span className="h-[2px] w-10 bg-[#F9A61A]" />
          </div>

          <h2 className="mt-1 text-3xl font-bold text-[#101D33] sm:text-4xl lg:text-5xl">
            Read Our Latest{" "}
            <span className="text-[#F9A61A]">Insights &amp; Blog</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base">
            Stay updated with expert insights, business registration tips and
            the latest news to help you grow your business.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map(({ title, text, date, author, href, image }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-xl bg-white shadow-[0_6px_24px_rgba(16,29,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,29,51,0.14)]"
            >
              {/* Image */}
              <Link
                href={href}
                className="relative block h-[210px] w-full overflow-hidden sm:h-[230px]"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Content (meta panel overlaps the image) */}
              <div className="relative -mt-9 flex flex-1 flex-col px-5 pb-6">
                <div className="-mx-2 flex items-center gap-4 rounded-t-xl bg-white px-3 pb-1 pt-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-[#101D33] px-3.5 py-2 text-[13px] font-medium text-white">
                    <FaRegCalendarAlt className="text-[#F9A61A]" />
                    {date}
                  </span>
                  <span className="h-5 w-px bg-slate-300" />
                  <span className="inline-flex items-center gap-2 text-[14px] text-slate-600">
                    <FaUser className="text-[#F9A61A]" />
                    by {author}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-[#101D33]">
                  <Link href={href} className="hover:text-[#E39A12]">
                    {title}
                  </Link>
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-500">
                  {text}
                </p>

                <Link
                  href={href}
                  className="mt-5 inline-flex w-fit items-center gap-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#101D33]"
                >
                  <HiArrowLongRight className="text-3xl text-[#F9A61A] transition-transform duration-300 group-hover:translate-x-1.5" />
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}