import { NextResponse } from "next/server";

import { createTransaction } from "@/lib/db/transactions";

export async function POST(request: Request) {
  const body = await request.json();

  const transaction = await createTransaction(body);

  return NextResponse.json({
    success: true,
    transaction,
  });
}
