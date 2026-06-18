"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { generateInvoiceNumber } from "@/lib/invoice";
import { Product } from "@/types/product";

interface PaymentBarProps {
  serviceName: string;

  userId: string;

  serverId: string;

  product: Product | null;

  paymentMethod?: string;

  email?: string;

  whatsapp?: string;
}

export function PaymentBar({
  serviceName,

  userId,
  serverId,

  product,

  paymentMethod,

  email,
  whatsapp,
}: PaymentBarProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const isValid =
    !!userId && !!product && !!paymentMethod && !!email && !!whatsapp;

  async function handleCheckout() {
    if (!product) return;

    try {
      setLoading(true);

      const invoiceNumber = generateInvoiceNumber();

      const response = await fetch("/api/transactions", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          invoiceNumber,

          serviceName,

          target: userId,

          serverId,

          productName: product.name,

          price: product.price,

          paymentMethod: paymentMethod || "",

          email: email || "",

          whatsapp: whatsapp || "",

          status: "PENDING",

          createdAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!result.success) {
        alert("Gagal membuat transaksi");

        return;
      }

      router.push(`/invoice/${invoiceNumber}`);
    } catch (error) {
      console.error(error);

      alert("Terjadi kesalahan saat checkout");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        border-t
        bg-background/95
        backdrop-blur
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-4
          py-4
        "
      >
        <div className="min-w-0">
          <div className="text-sm text-muted-foreground">Produk Dipilih</div>

          <div className="truncate font-semibold">{product?.name || "-"}</div>

          <div className="text-xl font-bold text-orange-500">
            Rp {product?.price.toLocaleString("id-ID") || "0"}
          </div>
        </div>

        <button
          onClick={handleCheckout}
          disabled={!isValid || loading}
          className={`
            rounded-xl
            px-8
            py-3
            font-medium
            text-white
            transition

            ${
              isValid && !loading
                ? "bg-orange-500 hover:opacity-90"
                : "cursor-not-allowed bg-gray-300 text-gray-600"
            }
          `}
        >
          {loading ? "Memproses..." : isValid ? "Bayar" : "Lengkapi Data"}
        </button>
      </div>
    </div>
  );
}
