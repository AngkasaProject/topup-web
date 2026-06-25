import Link from "next/link";

import type { Category, Service } from "@/types/database";

interface Props {
  category: Category;
  services: Service[];
}

export function CategorySection({ category, services }: Props) {
  const items = services.slice(0, 8);

  return (
    <section id={category.slug} className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{category.name}</h2>

        <button className="text-sm text-orange-500">Lihat Semua</button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/produk/${item.slug}`}
            className="
              rounded-2xl
              border
              p-4
              transition
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            <div
              className="
                mb-3
                flex
                h-20
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-orange-100
              "
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-semibold">{item.name}</span>
              )}
            </div>

            <div className="font-medium">{item.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
