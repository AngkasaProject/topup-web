import { products } from "@/data/products";
import { ProductDetail } from "@/components/product/product-detail";
import { services } from "@/data/services";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  const serviceProducts = products[slug as keyof typeof products] || [];

  return <ProductDetail service={service} products={serviceProducts} />;
}
