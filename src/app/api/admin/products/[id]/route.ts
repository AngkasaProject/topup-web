import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const body = (await request.json()) as {
      sell_price: number;
      original_price: number;
      status: number;
    };

    const { env } = await getCloudflareContext({
      async: true,
    });

    await env.DB.prepare(
      `
      UPDATE products
      SET
        sell_price = ?,
        original_price = ?,
        status = ?
      WHERE id = ?
      `,
    )
      .bind(body.sell_price, body.original_price, body.status, id)
      .run();

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      },
    );
  }
}
