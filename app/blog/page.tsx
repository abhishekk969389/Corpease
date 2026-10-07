import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import Blog from "../components/homelayout/blog";
import Link from "next/link";

export const instant = false;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string, page?: string }> }) {
    const params = await searchParams;
    const categoryQuery = params.category;
    const currentPage = parseInt(params.page || "1", 10);
    
    const allPosts = site.blogPageData.posts;
    
    // Filter by category
    const filteredPosts = categoryQuery 
      ? allPosts.filter((post: any) => post.category === categoryQuery)
      : allPosts;

    const postsPerPage = 6;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    const customData = {
      ...site.blogPageData,
      posts: currentPosts
    };

    return (
        <main>
            <SubBanner data={site.subBanners.blog} />
            
            {currentPosts.length > 0 ? (
               <Blog data={customData} />
            ) : (
               <div className="text-center py-20">
                 <h3 className="text-2xl font-bold text-[#101D33] mb-2">No Posts Found</h3>
                 <p className="text-slate-500">There are no blog posts available in this category yet.</p>
               </div>
            )}
        </main>
    );
}
