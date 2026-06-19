import Link from "next/link";
import { getServices } from "@/lib/db/services";
import { Plus } from "lucide-react";
export const dynamic = "force-dynamic";

export default async function ProdukPage() {
  const games = await getServices();

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

      <div className="rounded-xl border bg-background overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 text-left">Game</th>
              <th className="p-4 text-left">Nominal</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {games.map((game) => (
              <tr key={game.id} className="border-b hover:bg-muted/50">
                <td className="p-4">
                  <Link
                    href={`/admin/produk/${game.slug}`}
                    className="font-medium"
                  >
                    {game.name}
                  </Link>
                </td>

                <td className="p-4">-</td>

                <td className="p-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                    Aktif
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
