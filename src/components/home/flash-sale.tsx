export function FlashSale() {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">⚡ Flash Sale</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="rounded-2xl border p-4">
            <div className="text-sm text-muted-foreground">Mobile Legends</div>

            <div className="mt-2 font-bold">86 Diamond</div>

            <div className="mt-2 text-orange-500 font-bold">Rp18.000</div>
          </div>
        ))}
      </div>
    </section>
  );
}
