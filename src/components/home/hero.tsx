export function Hero() {
  return (
    <section className="mb-10">
      <div
        className="
          rounded-3xl
          bg-gradient-to-r
          from-orange-500
          via-orange-400
          to-amber-400
          p-10
          text-white
        "
      >
        <h1 className="text-5xl font-bold">Topup Game Murah & Cepat</h1>

        <p className="mt-4 max-w-xl text-lg">
          Topup Mobile Legends, Free Fire, PUBG Mobile, Roblox dan game lainnya
          dengan proses otomatis 24 jam.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-xl bg-white px-5 py-3 font-semibold text-orange-500">
            Topup Sekarang
          </button>

          <button className="rounded-xl border border-white px-5 py-3">
            Cek Transaksi
          </button>
        </div>
      </div>
    </section>
  );
}
