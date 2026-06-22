import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      serviceId: string;
    }>;
  },
) {
  try {
    const { serviceId } = await params;

    const body = (await request.json()) as {
      markup: number;
      discountPercent: number;
    };

    const { env } = await getCloudflareContext({
      async: true,
    });

    await env.DB.prepare(
      `
      UPDATE service_settings
      SET
        markup = ?,
        discount_percent = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE service_id = ?
      `,
    )
      .bind(body.markup, body.discountPercent, serviceId)
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
