import { categories } from "@/data/categories";

export function CategoryTabs() {
  return (
    <section className="mt-8">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((item) => (
          <a
            key={item.slug}
            href={`#${item.slug}`}
            className="
              rounded-full
              border
              px-5
              py-2
              whitespace-nowrap
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
