import HeroBanner from "@/components/HomePage/Banner";
import CategorySection from "@/components/HomePage/CategorySection";
import SummerCareTips from "@/components/HomePage/SummerCareTips";
import PromotionsOffers from "@/components/Promotion";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      {/* <PromotionsOffers/> */}
      <CategorySection/>
      <SummerCareTips/>
    </div>
  );
}
