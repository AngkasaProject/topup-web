export function Features() {
  const items = [
    "Proses Otomatis",
    "24 Jam Online",
    "Harga Murah",
    "Support Cepat",
  ];

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">Kenapa Memilih Kami?</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border p-5">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
