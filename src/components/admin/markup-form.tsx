"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface MarkupFormProps {
  slug: string;
  serviceId: number;
  initialMarkup: number;
  initialDiscountPercent: number;
}

export function MarkupForm({
  slug,
  serviceId,
  initialMarkup,
  initialDiscountPercent,
}: MarkupFormProps) {
  const router = useRouter();

  const [editing, setEditing] = useState(false);

  const [markup, setMarkup] = useState(initialMarkup);

  const [discountPercent, setDiscountPercent] = useState(
    initialDiscountPercent,
  );

  const [loading, setLoading] = useState(false);

  async function applyMarkup() {
    setLoading(true);

    await fetch(`/api/admin/service-settings/${serviceId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        markup,
        discountPercent,
      }),
    });

    await fetch(`/api/admin/services/${slug}/markup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        markup,
        discountPercent,
      }),
    });

    router.refresh();

    setLoading(false);
    setEditing(false);
  }

  if (!editing) {
    return (
      <div className="rounded-xl border bg-background p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Markup Otomatis</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Markup: Rp {markup.toLocaleString("id-ID")}
            </p>

            <p className="text-sm text-muted-foreground">
              Harga Coret: {discountPercent}%
            </p>
          </div>

          <button onClick={() => setEditing(true)} className="text-blue-600">
            Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-background p-4">
      <h2 className="mb-4 font-semibold">Markup Otomatis</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm">Markup (Rp)</label>

          <input
            type="number"
            value={markup}
            onChange={(e) => setMarkup(Number(e.target.value))}
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm">Harga Coret (%)</label>

          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(Number(e.target.value))}
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => {
            setMarkup(initialMarkup);
            setDiscountPercent(initialDiscountPercent);
            setEditing(false);
          }}
          className="text-muted-foreground"
        >
          Batal
        </button>

        <button
          onClick={applyMarkup}
          disabled={loading}
          className="text-green-600"
        >
          {loading ? "Memproses..." : "Terapkan"}
        </button>
      </div>
    </div>
  );
}
