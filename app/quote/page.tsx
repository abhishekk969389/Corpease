import SubBanner from "@/app/components/ui/subbanner";
import { site } from "@/data/index";
import Quote from "../components/layout/quote/quotesec";

export default function QuotePage() {
  return (
    <main>
      <SubBanner data={site.subBanners.quote} />
      <Quote/>
    </main>
  );
}
