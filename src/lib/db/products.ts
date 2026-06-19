import type { Product } from "@/types/database";

export async function getProductsByService(
  db: D1Database,
  serviceId: number,
): Promise<Product[]> {
  const result = await db
    .prepare(
      `
      SELECT *
      FROM products
      WHERE service_id = ?
      ORDER BY sell_price
      `,
    )
    .bind(serviceId)
    .all();

  return result.results as unknown as Product[];
}
