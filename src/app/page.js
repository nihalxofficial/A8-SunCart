import CustomerReview from "@/components/CustomerReview";
import HeroBanner from "@/components/HomePage/Banner";
import CategorySection from "@/components/HomePage/CategorySection";
import PopularProduct from "@/components/HomePage/PopularProduct";
import SummerCareTips from "@/components/HomePage/SummerCareTips";
import TopBrands from "@/components/HomePage/TopBrands";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <PopularProduct/>
      <CategorySection/>
      <TopBrands/>
      <CustomerReview/>
      <SummerCareTips/>
    </div>
  );
}
