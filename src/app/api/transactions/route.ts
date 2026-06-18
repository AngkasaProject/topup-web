import { NextResponse } from "next/server";
import { Transaction } from "@/types/transaction";

import {
  createTransaction,
  getTransactions,
  clearTransactions,
} from "@/lib/db/transactions";

export async function GET() {
  const transactions = await getTransactions();

  return NextResponse.json({
    success: true,
    transactions,
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Transaction;

  const transaction = await createTransaction(body);

  return NextResponse.json({
    success: true,
    transaction,
  });
}

export async function DELETE() {
  await clearTransactions();

  return NextResponse.json({
    success: true,
  });
}
