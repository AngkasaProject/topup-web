import { Search } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";

export default function CekTransaksiPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Cek Transaksi</h1>

          <p className="mt-3 text-muted-foreground">
            Masukkan invoice untuk melihat status transaksi.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border p-6">
          <div className="relative">
            <input
              placeholder="INV-123456"
              className="
              w-full
              rounded-xl
              border
              py-3
              pl-4
              pr-12
            "
            />

            <Search
              size={20}
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
            "
            />
          </div>

          <button
            className="
            mt-4
            w-full
            rounded-xl
            bg-orange-500
            py-3
            font-semibold
            text-white
          "
          >
            Cek Status
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
