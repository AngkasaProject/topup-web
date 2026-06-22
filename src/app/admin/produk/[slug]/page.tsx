import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductRow } from "@/components/admin/product-row";
import { MarkupForm } from "@/components/admin/markup-form";
import { getServiceSettings } from "@/lib/db/service-settings";

import { getServiceBySlug } from "@/lib/db/services";
import { getProductsByService } from "@/lib/db/products";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const products = await getProductsByService(Number(service.id));

  const settings = await getServiceSettings(Number(service.id));

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/produk" className="text-sm text-muted-foreground">
          ← Kembali ke Produk
        </Link>

        <h1 className="mt-2 text-3xl font-bold">{String(service.name)}</h1>

        <p className="text-muted-foreground">Kelola nominal produk</p>
      </div>

      <MarkupForm
        slug={slug}
        serviceId={Number(service.id)}
        initialMarkup={Number(settings?.markup ?? 1500)}
        initialDiscountPercent={Number(settings?.discount_percent ?? 10)}
      />

      <div className="rounded-xl border bg-background overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left">Produk</th>

              <th className="p-4 text-left">Modal</th>

              <th className="p-4 text-left">Harga Jual</th>

              <th className="p-4 text-left">Harga Coret</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product: any) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
