import CategorySection from "@/components/CategorySection";
import FlashSaleSection from "@/components/FlashSaleSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurCollectionSection from "@/components/OurCollectionSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-[1920px] mx-auto">
      <Header />
      <main>
        <HeroSection />
        <FlashSaleSection />
        <CategorySection />
        <OurCollectionSection />
      </main>
      <Footer />
    </div>
  );
}
