import Link from "next/link";
import {
  LayoutDashboard,
  Gamepad2,
  ReceiptText,
  Settings,
  Moon,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        <aside className="hidden md:flex w-56 border-r bg-background flex-col">
          <div className="p-6 border-b">
            <h2 className="font-bold text-xl">AGKS Admin</h2>
          </div>

          <nav className="p-4 space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted transition-colors"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link
              href="/admin/produk"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted transition-colors"
            >
              <Gamepad2 size={18} />
              Produk
            </Link>

            <Link
              href="/admin/transaksi"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted transition-colors"
            >
              <ReceiptText size={18} />
              Transaksi
            </Link>

            <Link
              href="/admin/pengaturan"
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted transition-colors"
            >
              <Settings size={18} />
              Pengaturan
            </Link>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background flex items-center justify-between px-6">
            <div>
              <h1 className="font-semibold">AGKS Online</h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="border rounded-lg p-2 hover:bg-muted">
                <Moon size={18} />
              </button>

              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                A
              </div>
            </div>
          </header>

          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
