"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Transaction } from "@/types/transaction";

import { Countdown } from "@/components/invoice/countdown";
import { StatusBadge } from "@/components/invoice/status-badge";

export default function InvoiceClient({ invoice }: { invoice: string }) {
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const [loading, setLoading] = useState(true);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadInvoice() {
      try {
        const response = await fetch(`/api/transactions/${invoice}`);

        const result: any = await response.json();

        if (result.success) {
          setTransaction(result.transaction);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadInvoice();
  }, [invoice]);

  async function handleCopy() {
    if (!transaction) return;

    await navigator.clipboard.writeText(transaction.invoiceNumber);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  if (loading) {
    return (
      <div className="rounded-3xl border p-10 text-center">
        Memuat invoice...
      </div>
    );
  }

  if (!transaction) {
    return (
      <div className="rounded-3xl border p-10 text-center">
        <h2 className="mb-2 text-2xl font-bold">Transaksi Tidak Ditemukan</h2>

        <p className="mb-6 text-muted-foreground">
          Invoice yang Anda cari tidak tersedia.
        </p>

        <Link
          href="/"
          className="
            inline-flex
            rounded-xl
            border
            px-4
            py-2
          "
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Invoice</h1>

            <p className="mt-2 font-mono text-lg">
              {transaction.invoiceNumber}
            </p>
          </div>

          <StatusBadge status={transaction.status} />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopy}
          className="
            rounded-xl
            border
            px-4
            py-2
          "
        >
          {copied ? "✓ Tersalin" : "Salin Invoice"}
        </button>
      </div>

      {transaction.status === "PENDING" && (
        <div className="rounded-3xl border p-6">
          <Countdown createdAt={transaction.createdAt} />
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Detail Pesanan</h2>

          <div className="space-y-4">
            <Info label="Produk" value={transaction.serviceName} />

            <Info label="Tujuan" value={transaction.target} />

            {transaction.serverId && (
              <Info label="Server" value={transaction.serverId} />
            )}

            <Info label="Nominal" value={transaction.productName} />

            <Info
              label="Tanggal"
              value={new Date(transaction.createdAt).toLocaleString("id-ID")}
            />
          </div>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Pembayaran</h2>

          <div className="space-y-4">
            <Info label="Metode" value={transaction.paymentMethod} />

            <Info label="Email" value={transaction.email} />

            <Info label="WhatsApp" value={transaction.whatsapp} />

            <div className="border-t pt-4">
              <div className="text-sm text-muted-foreground">
                Total Pembayaran
              </div>

              <div className="text-3xl font-bold text-orange-500">
                Rp {transaction.price.toLocaleString("id-ID")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-dashed
          p-10
          text-center
        "
      >
        <div className="mb-3 text-xl font-semibold">QRIS Placeholder</div>

        <p className="mb-6 text-muted-foreground">
          QRIS dari payment gateway akan muncul di sini.
        </p>

        <div
          className="
            rounded-xl
            bg-muted
            p-4
          "
        >
          Menunggu pembayaran...
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-sm text-muted-foreground">{label}</div>

      <div className="font-medium break-words">{value}</div>
    </div>
  );
}
