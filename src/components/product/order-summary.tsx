import { Product } from "@/types/product";

interface OrderSummaryProps {
  serviceName: string;

  userId: string;

  serverId: string;

  product: Product | null;

  paymentMethod: string;

  email: string;

  whatsapp: string;
}

export function OrderSummary({
  serviceName,
  userId,
  serverId,
  product,
  paymentMethod,
  email,
  whatsapp,
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
        <SummaryItem label="Produk" value={serviceName || "-"} />

        <SummaryItem label="Tujuan" value={userId || "-"} />

        {serverId && <SummaryItem label="Server" value={serverId} />}

        <SummaryItem label="Nominal" value={product?.name || "-"} />

        <SummaryItem label="Pembayaran" value={paymentMethod || "-"} />

        <SummaryItem label="Email" value={email || "-"} />

        <SummaryItem label="WhatsApp" value={whatsapp || "-"} />
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

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>

      <p className="font-medium break-words">{value}</p>
    </div>
  );
}
