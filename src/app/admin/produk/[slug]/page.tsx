import Link from "next/link";
import { notFound } from "next/navigation";
import { Switch } from "@/components/ui/switch";

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

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/produk" className="text-sm text-muted-foreground">
          ← Kembali ke Produk
        </Link>

        <h1 className="mt-2 text-3xl font-bold">{String(service.name)}</h1>

        <p className="text-muted-foreground">Kelola nominal produk</p>
      </div>

      <div className="rounded-xl border bg-background p-4">
        <h2 className="mb-4 font-semibold">Markup Massal</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm">Markup (Rp)</label>

            <input
              type="number"
              placeholder="1500"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">Harga Coret (%)</label>

            <input
              type="number"
              placeholder="10"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>
        </div>

        <button className="mt-4 rounded-lg border px-4 py-2 text-sm font-medium">
          Terapkan ke Semua Produk
        </button>
      </div>

      <div className="rounded-xl border bg-background overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left">Produk</th>

              <th className="p-4 text-left">Modal</th>

              <th className="p-4 text-left">Harga Jual</th>

              <th className="p-4 text-left">Harga Coret</th>

              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product: any) => {
              const margin =
                Number(product.sell_price) - Number(product.cost_price);

              return (
                <tr key={product.id} className="border-b">
                  <td className="p-4 font-medium">{product.name}</td>

                  <td className="p-4">
                    Rp {Number(product.cost_price).toLocaleString("id-ID")}
                  </td>

                  <td className="p-4">
                    <div>
                      <input
                        type="number"
                        defaultValue={product.sell_price}
                        className="w-28 rounded border px-2 py-1"
                      />

                      <div className="mt-1 text-xs text-green-600">
                        + Rp {margin.toLocaleString("id-ID")}
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <input
                      type="number"
                      defaultValue={product.original_price ?? 0}
                      className="w-28 rounded border px-2 py-1"
                    />
                  </td>

                  <td className="p-4">
                    <Switch defaultChecked={product.status === 1} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
