export function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="container mx-auto py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold">TOPUPKU</h3>

            <p className="text-sm text-muted-foreground mt-2">
              Topup game murah dan otomatis.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Menu</h3>

            <ul className="mt-2 space-y-2 text-sm">
              <li>Home</li>
              <li>Cek Transaksi</li>
              <li>Kontak</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Bantuan</h3>

            <ul className="mt-2 space-y-2 text-sm">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          © 2025 TOPUPKU
        </div>
      </div>
    </footer>
  );
}
