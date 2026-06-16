import { Gamepad2, Flame, Shield, Swords, Trophy, Monitor } from "lucide-react";

const categories = [
  { name: "MLBB", icon: Flame },
  { name: "FF", icon: Shield },
  { name: "PUBG", icon: Swords },
  { name: "Valorant", icon: Trophy },
  { name: "Roblox", icon: Gamepad2 },
  { name: "Steam", icon: Monitor },
];

export function Categories() {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">Kategori Game</h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="
                rounded-2xl
                border
                p-4
                text-center
                hover:shadow-md
                transition
              "
            >
              <Icon size={28} className="mx-auto mb-2 text-orange-500" />

              <p className="text-sm">{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
