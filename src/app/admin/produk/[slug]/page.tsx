import Link from "next/link";
import { notFound } from "next/navigation";
import { Switch } from "@/components/ui/switch";

import { products } from "@/data/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const items = products[slug as keyof typeof products];

  if (!items) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/produk" className="text-sm text-muted-foreground">
          ← Kembali ke Produk
        </Link>

        <h1 className="mt-2 text-3xl font-bold">
          {slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>

        <p className="text-muted-foreground">Kelola nominal produk</p>
      </div>

      <div className="rounded-xl border bg-background overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left">Kode</th>

              <th className="p-4 text-left">Produk</th>

              <th className="p-4 text-left">Modal</th>

              <th className="p-4 text-left">Jual</th>

              <th className="p-4 text-left">Margin</th>

              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              const modal = Math.round(item.price * 0.9);

              const margin = item.price - modal;

              return (
                <tr key={item.id} className="border-b">
                  <td className="p-4">ML{item.id}</td>

                  <td className="p-4">{item.name}</td>

                  <td className="p-4">
                    Rp
                    {modal.toLocaleString("id-ID")}
                  </td>

                  <td className="p-4 font-medium">
                    Rp
                    {item.price.toLocaleString("id-ID")}
                  </td>

                  <td className="p-4 text-green-600">
                    Rp
                    {margin.toLocaleString("id-ID")}
                  </td>

                  <td className="p-4">
                    <Switch defaultChecked />
                  </td>

                  <td className="p-4">
                    <button className="text-blue-600">Edit</button>
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
