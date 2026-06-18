import { services } from "@/data/services";
import Link from "next/link";

export function ProductGrid() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Produk Populer</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((item) => (
          <Link
            href={`/produk/${item.slug}`}
            key={item.id}
            className="
    block
    overflow-hidden
    rounded-2xl
    border
    transition
    hover:-translate-y-1
    hover:shadow-lg
  "
          >
            <div className="h-40 bg-orange-100 flex items-center justify-center">
              <span className="font-bold">{item.name}</span>
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>

              <p className="text-sm text-muted-foreground">Layanan Digital</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
