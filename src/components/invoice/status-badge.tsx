interface Props {
  status: "PENDING" | "PAID" | "FAILED" | "EXPIRED";
}

export function StatusBadge({ status }: Props) {
  const styles = {
    PENDING: "bg-yellow-100 text-yellow-700 border-yellow-200",

    PAID: "bg-green-100 text-green-700 border-green-200",

    FAILED: "bg-red-100 text-red-700 border-red-200",

    EXPIRED: "bg-gray-100 text-gray-700 border-gray-200",
  };

  const labels = {
    PENDING: "Menunggu Pembayaran",

    PAID: "Pembayaran Berhasil",

    FAILED: "Pembayaran Gagal",

    EXPIRED: "Kadaluarsa",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium

        ${styles[status]}
      `}
    >
      {labels[status]}
    </span>
  );
}
