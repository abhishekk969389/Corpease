"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiPhoneCall, FiMail, FiCalendar } from "react-icons/fi";
import { site } from "@/data/index";
import AnimateIn from "@/app/components/ui/animate-in";

export default function BlogSidebar() {
  const sidebarData = site.serviceSidebar;
  const recentPosts = site.blogPageData.posts.slice(0, 4);

  const categories = [
    "Business Registration",
    "Company Formation",
    "Compliance & Filings",
    "GST & Taxation",
    "Trademark & IP",
    "Business Growth",
    "Legal & Regulatory"
  ];

  return (
    <div className="flex flex-col gap-8">

      {/* Recent Posts Card */}
      <AnimateIn direction="up" delay={0.2} className="rounded-xl border border-slate-100 bg-slate-50 p-6">
        <h3 className="mb-6 text-xl font-bold text-[#101D33] border-b border-slate-200 pb-4">
          Recent Posts
                          <div className="w-12 mt-1 h-[3px] bg-[#F59E0B] rounded-full"></div>
        </h3>
        <div className="flex flex-col gap-5">
          {recentPosts.map((post) => (
            <Link href={post.link} key={post.id} className="group flex gap-4 items-center">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-[#101D33] group-hover:text-[#F9A61A] transition-colors line-clamp-2 leading-tight mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <FiCalendar className="text-[#F9A61A]" />
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </AnimateIn>

      {/* Need Assistance Card */}
      <AnimateIn direction="up" delay={0.3} className="rounded-xl bg-[#101D33] p-8 py-10 text-white relative overflow-hidden flex flex-col justify-center">
        {/* Background graphic */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#1A2C4D] opacity-50" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#1A2C4D] opacity-50" />

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-3">
            Need Expert Guidance for <span className="text-[#F9A61A]">Your Business</span>?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Our team is here to help you with company registration, compliance and more.
               <div className="w-12 mt-4 h-[3px] bg-[#F59E0B] rounded-full"></div>
          </p>
                       
          

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A2C4D] text-[#F9A61A]">
                <FiPhoneCall />
              </span>
              <div className="flex flex-col">
                {sidebarData.assistance.phone.map((p, i) => (
                  <span key={i} className="text-sm font-semibold text-white">{p}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A2C4D] text-[#F9A61A]">
                <FiMail />
              </span>
              <div className="flex flex-col">
                {sidebarData.assistance.email.map((e, i) => (
                  <span key={i} className="text-sm font-semibold text-white">{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
