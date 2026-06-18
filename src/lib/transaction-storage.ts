import { Transaction } from "@/types/transaction";

const KEY = "agks_transactions";

export function saveTransaction(transaction: Transaction) {
  const existing = localStorage.getItem(KEY);

  const data = existing ? JSON.parse(existing) : [];

  data.push(transaction);

  localStorage.setItem(KEY, JSON.stringify(data));
}

export function getTransaction(invoiceNumber: string) {
  const existing = localStorage.getItem(KEY);

  if (!existing) return null;

  const data = JSON.parse(existing);

  return data.find((item: Transaction) => item.invoiceNumber === invoiceNumber);
}
