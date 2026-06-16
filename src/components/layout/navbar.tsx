import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          TOPUPKU
        </Link>

        <nav className="flex gap-6">
          <a href="/">Home</a>
          <a href="/cek-transaksi">Cek Transaksi</a>
          <a href="/kontak">Kontak</a>
          <a href="/tentang-kami">Tentang Kami</a>
        </nav>
      </div>
    </header>
  );
}
