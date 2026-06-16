type Props = {
  searchParams: Promise<{
    game?: string;
    product?: string;
    price?: string;
    userid?: string;
    server?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const data = await searchParams;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold">Checkout</h1>

      <div className="rounded-2xl border p-6">
        <div className="space-y-3">
          <p>Game: {data.game}</p>

          <p>Produk: {data.product}</p>

          <p>User ID: {data.userid}</p>

          <p>Server: {data.server}</p>

          <p>Harga: Rp {Number(data.price).toLocaleString("id-ID")}</p>
          <button
            className="
    mt-6
    rounded-xl
    bg-orange-500
    px-6
    py-3
    text-white
  "
          >
            Buat Invoice
          </button>
        </div>
      </div>
    </main>
  );
}
