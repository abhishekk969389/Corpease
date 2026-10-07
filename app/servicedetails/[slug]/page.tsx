import { notFound } from "next/navigation";
import { site } from "@/data/index";
import SubBanner from "@/app/components/ui/subbanner";
import ServiceContent from "@/app/components/layout/servicedetails/ServiceContent";
import ServiceSidebar from "@/app/components/layout/servicedetails/ServiceSidebar";
import ServiceDocuments from "@/app/components/layout/servicedetails/ServiceDocuments";

export const instant = false;

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const serviceData = site.serviceDetails[slug as keyof typeof site.serviceDetails] || site.serviceDetails["private-limited-company"];

  if (!serviceData) {
    notFound();
  }

  return (
    <main>
      <SubBanner data={site.subBanners.servicedetails} />
      
      <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            
            <div className="lg:col-span-2">
              <ServiceContent data={serviceData} />
            </div>

            <div className="lg:col-span-1">
              <ServiceSidebar />
            </div>

          </div>
        </div>
      </section>

      {/* Full width section below sidebar */}
      <ServiceDocuments data={serviceData} />
    </main>
  );
}
