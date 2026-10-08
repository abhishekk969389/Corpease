import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { site } from "@/data/index";
import type { CorpEaseBlogData } from "@/data/index";
import AnimateIn from "@/app/components/ui/animate-in";

export default function Blog({ data }: { data?: CorpEaseBlogData | any }) {
  const blogData = data || site.ourBlogs;
  if (!blogData) return null;

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <AnimateIn direction="up" delay={0.1}>
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#101D33]">
                {blogData.badge}
              </p>
              <span className="h-[2px] w-10 bg-[#F9A61A]" />
            </div>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.2}>
            <h2 className="mt-1 text-3xl font-bold text-[#101D33] sm:text-4xl lg:text-5xl">
              {blogData.titlePrefix}{" "}
              <span className="text-[#F9A61A]">{blogData.titleHighlight}</span>
            </h2>
          </AnimateIn>

          <AnimateIn direction="up" delay={0.3}>
            <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base">
              {blogData.description}
            </p>
          </AnimateIn>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogData.posts?.map(({ title, excerpt, date, author, link, image }: any, idx: number) => (
            <AnimateIn
              key={title}
              direction="up"
              delay={0.1 + idx * 0.1}
            >
              <article
                className="group flex h-full flex-col rounded-xl bg-white shadow-[0_6px_24px_rgba(16,29,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,29,51,0.14)]"
              >
                {/* Image */}
                <Link
                  href={link}
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
                    <Link href={link} className="hover:text-[#E39A12]">
                      {title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-500">
                    {excerpt}
                  </p>

                  <Link
                    href={link}
                    className="mt-5 inline-flex w-fit items-center gap-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#101D33]"
                  >
                    <HiArrowLongRight className="text-3xl text-[#F9A61A] transition-transform duration-300 group-hover:translate-x-1.5" />
                    Read More
                  </Link>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
