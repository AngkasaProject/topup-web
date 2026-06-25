import Link from "next/link";

import type { Service } from "@/types/database";

interface ProductGridProps {
  services: Service[];
}

export function ProductGrid({ services }: ProductGridProps) {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">Produk Populer</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {services.map((item) => (
          <Link
            key={item.id}
            href={`/produk/${item.slug}`}
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
            <div className="flex h-40 items-center justify-center bg-orange-100 overflow-hidden">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-bold">{item.name}</span>
              )}
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
