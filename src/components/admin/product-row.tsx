"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface ProductRowProps {
  product: {
    id: number;
    name: string;
    cost_price: number;
    sell_price: number;
    original_price: number;
    status: number;
  };
}

export function ProductRow({ product }: ProductRowProps) {
  const [sellPrice, setSellPrice] = useState(product.sell_price);

  const [originalPrice, setOriginalPrice] = useState(
    product.original_price ?? 0,
  );

  const [status, setStatus] = useState(product.status === 1);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const margin = Number(sellPrice) - Number(product.cost_price);

  async function save() {
    setLoading(true);

    await fetch(`/api/admin/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sell_price: sellPrice,
        original_price: originalPrice,
        status: status ? 1 : 0,
      }),
    });

    setLoading(false);
  }
  if (!editing) {
    return (
      <tr className="border-b">
        <td className="p-4 font-medium">{product.name}</td>

        <td className="p-4">
          Rp {Number(product.cost_price).toLocaleString("id-ID")}
        </td>

        <td className="p-4">
          <div className="font-medium">
            Rp {Number(sellPrice).toLocaleString("id-ID")}
          </div>

          <div className="text-xs text-green-600">
            + Rp {margin.toLocaleString("id-ID")}
          </div>
        </td>

        <td className="p-4">
          {originalPrice > 0 ? (
            <span className="text-muted-foreground line-through">
              Rp {Number(originalPrice).toLocaleString("id-ID")}
            </span>
          ) : (
            "-"
          )}
        </td>

        <td className="p-4">
          <Switch checked={status} disabled />
        </td>

        <td className="p-4">
          <button onClick={() => setEditing(true)} className="text-blue-600">
            Edit
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr className="border-b bg-muted/20">
      <td className="p-4 font-medium">{product.name}</td>

      <td className="p-4">
        Rp {Number(product.cost_price).toLocaleString("id-ID")}
      </td>

      <td className="p-4">
        <input
          type="number"
          value={sellPrice}
          onChange={(e) => setSellPrice(Number(e.target.value))}
          className="w-28 rounded border px-2 py-1"
        />

        <div className="mt-1 text-xs text-green-600">
          + Rp {margin.toLocaleString("id-ID")}
        </div>
      </td>

      <td className="p-4">
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(Number(e.target.value))}
          className="w-28 rounded border px-2 py-1"
        />

        {originalPrice > 0 && (
          <div className="mt-1 text-xs text-muted-foreground line-through">
            Rp {Number(originalPrice).toLocaleString("id-ID")}
          </div>
        )}
      </td>

      <td className="p-4">
        <Switch checked={status} onCheckedChange={setStatus} />
      </td>

      <td className="p-4">
        <div className="flex gap-2">
          <button
            onClick={() => setEditing(false)}
            className="text-muted-foreground"
          >
            Batal
          </button>

          <button
            onClick={async () => {
              await save();
              setEditing(false);
            }}
            disabled={loading}
            className="text-green-600"
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </td>
    </tr>
  );
}
