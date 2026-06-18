import { Transaction } from "@/types/transaction";

const transactions: Transaction[] = [];

export async function createTransaction(data: Transaction) {
  transactions.push(data);

  return data;
}

export async function getTransactionByInvoice(invoiceNumber: string) {
  return (
    transactions.find((item) => item.invoiceNumber === invoiceNumber) ?? null
  );
}

export async function getTransactions() {
  return transactions;
}

export async function clearTransactions() {
  transactions.length = 0;
}
