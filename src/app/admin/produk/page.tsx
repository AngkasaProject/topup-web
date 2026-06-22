import { Plus } from "lucide-react";

import { ProductList } from "@/components/admin/product-list";

import { getCategories } from "@/lib/db/categories";
import { getServices } from "@/lib/db/services";

export const dynamic = "force-dynamic";

export default async function ProdukPage() {
  const categories = await getCategories();

  const services = await getServices();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Produk</h1>

          <p className="text-muted-foreground">Kelola produk topup</p>
        </div>

        <button className="flex items-center gap-2 rounded-lg border px-4 py-2">
          <Plus size={16} />
          Tambah
        </button>
      </div>

      <ProductList categories={categories} services={services} />
    </div>
  );
}
