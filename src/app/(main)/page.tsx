import { Footer } from "@/components/layout/footer";

import { SearchBar } from "@/components/home/search-bar";
import { Hero } from "@/components/home/hero";
import { FlashSale } from "@/components/home/flash-sale";
import { Categories } from "@/components/home/categories";
import { ProductGrid } from "@/components/home/product-grid";
import { Features } from "@/components/home/features";
import { Stats } from "@/components/home/stats";

import { CategoryTabs } from "@/components/home/category-tabs";
import { CategorySection } from "@/components/home/category-section";

import { getCategories } from "@/lib/db/categories";
import { getServices } from "@/lib/db/services";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const categories = await getCategories();

  const services = await getServices();

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <SearchBar />

        <Hero />

        <FlashSale />

        <Categories />

        <ProductGrid services={services.slice(0, 8)} />

        <CategoryTabs categories={categories} />

        {categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            services={services.filter(
              (service) => service.category_id === category.id,
            )}
          />
        ))}

        <Features />

        <Stats />
      </main>

      <Footer />
    </>
  );
}
