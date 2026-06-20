import { notFound } from "next/navigation";

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

  const products = await getProductsByService(service.id as number);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{service.name}</h1>

        <p className="text-muted-foreground">Kelola nominal produk</p>
      </div>

      <div className="rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left">Produk</th>

              <th className="p-4 text-left">Harga Modal</th>

              <th className="p-4 text-left">Harga Jual</th>

              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product: any) => (
              <tr key={product.id} className="border-b">
                <td className="p-4">{product.name}</td>

                <td className="p-4">
                  Rp {Number(product.cost_price).toLocaleString("id-ID")}
                </td>

                <td className="p-4">
                  Rp {Number(product.sell_price).toLocaleString("id-ID")}
                </td>

                <td className="p-4">
                  {product.status === 1 ? (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                      Aktif
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-700">
                      Nonaktif
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
