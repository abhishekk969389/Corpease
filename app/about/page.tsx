import SubBanner from "@/app/components/ui/subbanner";
import About from "@/app/components/homelayout/about";
import { site } from "@/data/index";
import Stats from "../components/homelayout/impact";
import WhyChooseUs from "../components/layout/about/whychoose";

export default function AboutPage() {
  return (
    <main>
      <SubBanner data={site.subBanners.about} />
      <About data={site.aboutPageDetails} />
      <Stats/>
      <WhyChooseUs/>
    </main>
  );
}
