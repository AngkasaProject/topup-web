import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const body = (await request.json()) as {
      markup: number;
      discountPercent: number;
    };

    const { env } = await getCloudflareContext({
      async: true,
    });

    const service = await env.DB.prepare(
      `
      SELECT id
      FROM services
      WHERE slug = ?
      LIMIT 1
      `,
    )
      .bind(slug)
      .first<{ id: number }>();

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service tidak ditemukan",
        },
        {
          status: 404,
        },
      );
    }

    const products = await env.DB.prepare(
      `
      SELECT id,cost_price
      FROM products
      WHERE service_id = ?
      `,
    )
      .bind(service.id)
      .all();

    for (const product of products.results as any[]) {
      const sellPrice = Number(product.cost_price) + Number(body.markup);

      const originalPrice = Math.round(
        sellPrice + (sellPrice * Number(body.discountPercent)) / 100,
      );

      await env.DB.prepare(
        `
        UPDATE products
        SET
          sell_price = ?,
          original_price = ?
        WHERE id = ?
        `,
      )
        .bind(sellPrice, originalPrice, product.id)
        .run();
    }

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
