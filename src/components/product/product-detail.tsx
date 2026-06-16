"use client";

import { useState } from "react";
import { OrderSummary } from "./order-summary";
import { PaymentBar } from "./payment-bar";

type Product = {
  id: number;
  name: string;
  price: number;
};

type Service = {
  id: number;
  slug: string;
  name: string;
  category: string;
  inputType: string;
};

interface ProductDetailProps {
  service: Service | undefined;
  products: Product[];
}

export function ProductDetail({ service, products }: ProductDetailProps) {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 pb-32">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{service?.name}</h1>

        <p className="mt-2 text-muted-foreground">
          Pilih produk dan masukkan data tujuan.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* KIRI */}
        <div className="space-y-6 lg:col-span-2">
          {/* STEP 1 */}
          <div className="rounded-2xl border p-6">
            <h2 className="mb-4 text-xl font-semibold">1. Data Tujuan</h2>

            {/* MOBILE LEGENDS */}
            {service?.inputType === "userid-server" && (
              <>
                <input
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="User ID"
                  className="
                    mb-3
                    w-full
                    rounded-xl
                    border
                    p-3
                  "
                />

                <input
                  value={serverId}
                  onChange={(e) => setServerId(e.target.value)}
                  placeholder="Server ID"
                  className="
                    w-full
                    rounded-xl
                    border
                    p-3
                  "
                />
              </>
            )}

            {/* FREE FIRE */}
            {service?.inputType === "userid" && (
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                className="
                  w-full
                  rounded-xl
                  border
                  p-3
                "
              />
            )}

            {/* PULSA */}
            {service?.inputType === "phone" && (
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Nomor HP"
                className="
                  w-full
                  rounded-xl
                  border
                  p-3
                "
              />
            )}

            {/* PLN */}
            {service?.inputType === "customer-id" && (
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="ID Pelanggan"
                className="
                  w-full
                  rounded-xl
                  border
                  p-3
                "
              />
            )}
          </div>

          {/* STEP 2 */}
          <div className="rounded-2xl border p-6">
            <h2 className="mb-4 text-xl font-semibold">2. Pilih Nominal</h2>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {products.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className={`
                    rounded-xl
                    border
                    p-4
                    text-left
                    transition

                    ${
                      selectedProduct?.id === item.id
                        ? "border-orange-500 bg-orange-50"
                        : "hover:border-orange-300"
                    }
                  `}
                >
                  <div className="font-semibold">{item.name}</div>

                  <div className="mt-2 text-orange-500">
                    Rp {item.price.toLocaleString("id-ID")}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <OrderSummary
          game={service?.name ?? ""}
          userId={userId}
          serverId={serverId}
          product={selectedProduct}
        />
      </div>

      {/* BOTTOM BAR */}
      <PaymentBar
        slug={service?.slug ?? ""}
        userId={userId}
        serverId={serverId}
        product={selectedProduct}
      />
    </main>
  );
}
