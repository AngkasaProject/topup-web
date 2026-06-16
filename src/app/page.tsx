import { Footer } from "@/components/layout/footer";

import { SearchBar } from "@/components/home/search-bar";
import { Hero } from "@/components/home/hero";
import { BannerSlider } from "@/components/home/banner-slider";
import { FlashSale } from "@/components/home/flash-sale";
import { Categories } from "@/components/home/categories";
import { ProductGrid } from "@/components/home/product-grid";
import { Features } from "@/components/home/features";
import { Stats } from "@/components/home/stats";
import { CategoryTabs } from "@/components/home/category-tabs";
import { CategorySection } from "@/components/home/category-section";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <SearchBar />

        <Hero />

        <FlashSale />

        <Categories />

        <CategoryTabs />

        <CategorySection category="game" title="Game" />

        <CategorySection category="pulsa" title="Pulsa" />

        <CategorySection category="voucher" title="Voucher" />

        <CategorySection category="token" title="Token PLN" />

        <Features />

        <Stats />
      </main>

      <Footer />
    </>
  );
}
