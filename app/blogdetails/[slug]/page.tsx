import { notFound } from "next/navigation";
import { site } from "@/data/index";
import SubBanner from "@/app/components/ui/subbanner";
import BlogContent from "@/app/components/layout/blogdetails/BlogContent";
import BlogSidebar from "@/app/components/layout/blogdetails/BlogSidebar";

export const instant = false;

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Try to find the blog in details, fallback to the first one if missing for demo
  const blogData = site.blogDetails[slug as keyof typeof site.blogDetails] || site.blogDetails["private-limited-company-registration-guide"];

  if (!blogData) {
    notFound();
  }

  return (
    <main>
      <SubBanner data={site.subBanners.blogdetails} />
      
      <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            
            <div className="lg:col-span-2">
              <BlogContent data={blogData} />
            </div>

            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
