import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET() {
  try {
    const { env } = await getCloudflareContext({
      async: true,
    });

    const result = await env.DB.prepare(
      `
      SELECT *
      FROM services
      ORDER BY id
      LIMIT 5
    `,
    ).all();

    return NextResponse.json({
      success: true,
      data: result.results,
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
