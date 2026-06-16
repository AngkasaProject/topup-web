type Product = {
  id: number;
  name: string;
  price: number;
};

interface OrderSummaryProps {
  game: string;
  userId: string;
  serverId: string;
  product: Product | null;
}

export function OrderSummary({
  game,
  userId,
  serverId,
  product,
}: OrderSummaryProps) {
  return (
    <div
      className="
        sticky
        top-20
        h-fit
        rounded-2xl
        border
        bg-background
        p-6
      "
    >
      <h2 className="mb-6 text-xl font-semibold">Detail Pesanan</h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Produk</p>

          <p className="font-medium">{game || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Tujuan</p>

          <p className="font-medium">{userId || "-"}</p>
        </div>

        {serverId && (
          <div>
            <p className="text-sm text-muted-foreground">Server</p>

            <p className="font-medium">{serverId}</p>
          </div>
        )}

        <div>
          <p className="text-sm text-muted-foreground">Nominal</p>

          <p className="font-medium">{product?.name || "-"}</p>
        </div>
      </div>

      <div className="my-6 border-t" />

      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Total</span>

        <span className="text-xl font-bold text-orange-500">
          Rp {product?.price.toLocaleString("id-ID") || "0"}
        </span>
      </div>
    </div>
  );
}
