import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/product/product-detail";
import { getPaymentMethods } from "@/lib/db/payment-methods";
import { getServiceBySlug } from "@/lib/db/services";
import { getProductsByService } from "@/lib/db/products";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
const paymentMethods = await getPaymentMethods();
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const products = await getProductsByService(Number(service.id));

  const mappedService = {
    id: Number(service.id),
    slug: service.slug,
    name: service.name,
    category: "",
    logo: service.logo ?? "",
    banner: service.banner ?? "",
    description: "",
    input_type: "userid-server",
    badges: [],
  };

  const mappedProducts = products
    .filter((item: any) => item.status === 1)
    .map((item: any) => ({
      id: Number(item.id),
      service_id: Number(item.service_id),
      code: item.code,
      name: item.name,
      price: Number(item.sell_price),
    }));

  return (
    <ProductDetail
      service={mappedService as any}
      products={mappedProducts as any}
      paymentMethods={paymentMethods}
    />
  );
}
