import { NextResponse } from "next/server";

import { getTransactionByInvoice } from "@/lib/db/transactions";

export async function GET(
  request: Request,
  context: {
    params: Promise<{
      invoice: string;
    }>;
  },
) {
  const { invoice } = await context.params;

  const transaction = await getTransactionByInvoice(invoice);

  if (!transaction) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    success: true,
    transaction,
  });
}
