import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <section className="mb-8">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={18}
        />

        <input
          placeholder="Cari game..."
          className="
            w-full
            rounded-2xl
            border
            bg-background
            py-3
            pl-12
            pr-4
            outline-none
          "
        />
      </div>
    </section>
  );
}
