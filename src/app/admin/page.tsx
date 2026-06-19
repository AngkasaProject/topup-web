import {
  Gamepad2,
  ReceiptText,
  Clock3,
  CircleCheck,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Total Produk",
    value: "4",
    subtitle: "+0 bulan ini",
    icon: Gamepad2,
  },
  {
    title: "Transaksi",
    value: "12",
    subtitle: "+12 bulan ini",
    icon: ReceiptText,
  },
  {
    title: "Pending",
    value: "2",
    subtitle: "Perlu diproses",
    icon: Clock3,
  },
  {
    title: "Sukses",
    value: "10",
    subtitle: "83% berhasil",
    icon: CircleCheck,
  },
  {
    title: "Pendapatan",
    value: "Rp250K",
    subtitle: "Bulan ini",
    icon: Wallet,
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-muted-foreground">Ringkasan aktivitas AGKS Online</p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border bg-background p-5"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {item.title}
                </span>

                <Icon size={18} />
              </div>

              <div className="mt-3 text-3xl font-bold">{item.value}</div>

              <div className="mt-1 text-xs text-muted-foreground">
                {item.subtitle}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border bg-background">
        <div className="border-b p-4">
          <h2 className="font-semibold">Transaksi Terbaru</h2>
        </div>

        <div className="p-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-3">Invoice</th>
                <th className="pb-3">Produk</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="py-4">INV-001</td>
                <td>86 Diamond ML</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    PAID
                  </span>
                </td>
                <td>Rp20.000</td>
              </tr>

              <tr className="border-t">
                <td className="py-4">INV-002</td>
                <td>70 Diamond FF</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                    PENDING
                  </span>
                </td>
                <td>Rp10.000</td>
              </tr>

              <tr className="border-t">
                <td className="py-4">INV-003</td>
                <td>60 UC PUBG</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    PAID
                  </span>
                </td>
                <td>Rp15.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
