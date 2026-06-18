interface Props {
  status: "PENDING" | "PAID" | "FAILED";
}

export function StatusBadge({ status }: Props) {
  const styles = {
    PENDING: "bg-yellow-100 text-yellow-700",

    PAID: "bg-green-100 text-green-700",

    FAILED: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        rounded-full
        px-4
        py-2
        text-sm
        font-medium

        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}
