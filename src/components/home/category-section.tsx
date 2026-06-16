import Link from "next/link";
import { services } from "@/data/services";

interface Props {
  category: string;
  title: string;
}

export function CategorySection({ category, title }: Props) {
  const items = services
    .filter((service) => service.category === category)
    .slice(0, 8);

  return (
    <section id={category} className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>

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
                rounded-xl
                bg-orange-100
              "
            >
              {item.name}
            </div>

            <div className="font-medium">{item.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
