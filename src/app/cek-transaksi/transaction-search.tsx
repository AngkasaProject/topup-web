"use client";

import { useState } from "react";

export default function TransactionSearch() {
  const [invoice, setInvoice] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>(null);

  const [error, setError] = useState("");

  async function handleSearch() {
    if (!invoice) return;

    try {
      setLoading(true);

      setError("");

      setResult(null);

      const response = await fetch(`/api/transactions/${invoice}`);

      const data = await response.json();

      if (!data.success) {
        setError("Transaksi tidak ditemukan");

        return;
      }

      setResult(data.transaction);
    } catch (err) {
      console.error(err);

      setError("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-8">
        <h1 className="mb-2 text-3xl font-bold">Cek Transaksi</h1>

        <p className="mb-6 text-muted-foreground">
          Masukkan nomor invoice untuk melihat status transaksi.
        </p>

        <div className="flex flex-col gap-3 md:flex-row">
          <input
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
            placeholder="INV-260617-1234"
            className="
              flex-1
              rounded-xl
              border
              p-3
            "
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="
              rounded-xl
              bg-orange-500
              px-6
              py-3
              text-white
            "
          >
            {loading ? "Mencari..." : "Cari"}
          </button>
        </div>

        {error && <div className="mt-4 text-sm text-red-500">{error}</div>}
      </div>

      {result && (
        <div className="rounded-3xl border p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Detail Transaksi</h2>

            <span
              className="
                rounded-full
                bg-yellow-100
                px-4
                py-2
                text-sm
                text-yellow-700
              "
            >
              {result.status}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Info label="Invoice" value={result.invoiceNumber} />

            <Info label="Produk" value={result.serviceName} />

            <Info label="Tujuan" value={result.target} />

            <Info label="Nominal" value={result.productName} />

            <Info label="Pembayaran" value={result.paymentMethod} />

            <Info label="Email" value={result.email} />
          </div>

          <div className="mt-6 border-t pt-6">
            <div className="text-sm text-muted-foreground">
              Total Pembayaran
            </div>

            <div className="text-3xl font-bold text-orange-500">
              Rp {result.price.toLocaleString("id-ID")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-sm text-muted-foreground">{label}</div>

      <div>{value}</div>
    </div>
  );
}
