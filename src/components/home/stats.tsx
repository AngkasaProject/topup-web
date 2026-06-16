export function Stats() {
  return (
    <section className="mt-16">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["10K+", "Transaksi"],
          ["24/7", "Online"],
          ["100+", "Produk"],
          ["99%", "Success Rate"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-2xl border p-6">
            <div className="text-3xl font-bold">{value}</div>

            <div className="text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
