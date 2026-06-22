"use client";

import { useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Service {
  id: number;
  category_id: number;
  slug: string;
  name: string;
  status: number;
}

interface ProductListProps {
  categories: Category[];
  services: Service[];
}

export function ProductList({ categories, services }: ProductListProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id);

  const filteredServices = services.filter(
    (service) => service.category_id === selectedCategory,
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={
              selectedCategory === category.id
                ? "rounded-lg border px-4 py-2 font-medium"
                : "rounded-lg border px-4 py-2 text-muted-foreground"
            }
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border p-4 flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium">{service.name}</h3>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={
                  service.status === 1
                    ? "text-green-600 text-sm"
                    : "text-red-600 text-sm"
                }
              >
                {service.status === 1 ? "Aktif" : "Nonaktif"}
              </span>

              <Link
                href={`/admin/produk/${service.slug}`}
                className="text-blue-600"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
