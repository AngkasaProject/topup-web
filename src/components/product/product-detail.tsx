"use client";

import { useState } from "react";

import { OrderSummary } from "./order-summary";
import { PaymentBar } from "./payment-bar";

import { PaymentMethods } from "@/components/payment/payment-methods";
import { ContactForm } from "@/components/payment/contact-form";
import { Product } from "@/types/product";
import { Service } from "@/types/service";

interface ProductDetailProps {
  service: Service | undefined;
  products: Product[];
  paymentMethods: PaymentMethod[];
}

import type { PaymentMethod } from "@/types/database";

export function ProductDetail({
  service,
  products,
  paymentMethods,
}: ProductDetailProps) {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [selectedMethod, setSelectedMethod] = useState("");

  const [email, setEmail] = useState("");

  const [whatsapp, setWhatsapp] = useState("");

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 pb-32">
      {/* HERO */}

      <div className="mb-8 overflow-hidden rounded-3xl border">
        <img
          src={service?.banner || "https://placehold.co/1200x300"}
          alt={service?.name}
          className="
            h-40
            w-full
            object-cover
            md:h-56
          "
        />

        <div className="p-6">
          <div className="flex items-center gap-4">
            <img
              src={service?.logo || "https://placehold.co/120x120"}
              alt={service?.name}
              className="
                h-16
                w-16
                rounded-2xl
                border
                object-cover
              "
            />

            <div>
              <h1 className="text-3xl font-bold">{service?.name}</h1>
            </div>
          </div>

          <p className="mt-4 text-muted-foreground">{service?.description}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* CONTENT */}

        <div className="space-y-6 lg:col-span-2">
          {/* STEP 1 */}

          <div className="rounded-2xl border p-6">
            <h2 className="mb-4 text-xl font-semibold">1. Data Tujuan</h2>

            {service?.input_type === "userid-server" && (
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

            {service?.input_type === "userid" && (
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

            {service?.input_type === "phone" && (
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

            {service?.input_type === "customer-id" && (
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

          {/* STEP 3 */}

          <PaymentMethods
            paymentMethods={paymentMethods}
            selectedMethod={selectedMethod}
            onSelect={setSelectedMethod}
          />

          {/* STEP 4 */}

          <ContactForm
            email={email}
            whatsapp={whatsapp}
            setEmail={setEmail}
            setWhatsapp={setWhatsapp}
          />
        </div>

        {/* SIDEBAR */}

        <OrderSummary
          serviceName={service?.name ?? ""}
          userId={userId}
          serverId={serverId}
          product={selectedProduct}
          paymentMethod={selectedMethod}
          email={email}
          whatsapp={whatsapp}
        />
      </div>

      {/* PAYMENT BAR */}

      <PaymentBar
        serviceName={service?.name ?? ""}
        userId={userId}
        serverId={serverId}
        product={selectedProduct}
        paymentMethod={selectedMethod}
        email={email}
        whatsapp={whatsapp}
      />
    </main>
  );
}
