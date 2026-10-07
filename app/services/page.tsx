import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import Services from "../components/homelayout/services";

export default function ServicesPage() {
  return (
    <main>
      <SubBanner data={site.subBanners.services} />
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <Services/>
      </div>
    </main>
  );
}
