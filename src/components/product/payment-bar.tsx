import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
};

interface PaymentBarProps {
  slug: string;
  userId: string;
  serverId: string;
  product: Product | null;
}

export function PaymentBar({
  slug,
  userId,
  serverId,
  product,
}: PaymentBarProps) {
  const disabled = !userId || !product;

  const paymentUrl = product
    ? `/payment?game=${slug}&product=${encodeURIComponent(
        product.name,
      )}&price=${product.price}&userid=${userId}&server=${serverId}`
    : "#";

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        border-t
        bg-background
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-4
          py-4
        "
      >
        <div>
          <div className="text-sm text-muted-foreground">Total Bayar</div>

          <div className="text-2xl font-bold">
            Rp {product?.price.toLocaleString("id-ID") || "0"}
          </div>
        </div>

        <Link
          href={paymentUrl}
          className={`
            rounded-xl
            px-8
            py-3
            text-white

            ${disabled ? "pointer-events-none bg-gray-400" : "bg-orange-500"}
          `}
        >
          Bayar
        </Link>
      </div>
    </div>
  );
}
