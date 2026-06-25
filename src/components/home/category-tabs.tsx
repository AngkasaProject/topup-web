import type { Category } from "@/types/database";

interface CategoryTabsProps {
  categories: Category[];
}

export function CategoryTabs({ categories }: CategoryTabsProps) {
  return (
    <section className="mt-8">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((item) => (
          <a
            key={item.id}
            href={`#${item.slug}`}
            className="
              whitespace-nowrap
              rounded-full
              border
              px-5
              py-2
              transition
              hover:bg-orange-500
              hover:text-white
            "
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  );
}
