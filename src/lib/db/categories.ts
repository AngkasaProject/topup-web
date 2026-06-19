import type { Category } from "@/types/database";

export async function getCategories(db: D1Database): Promise<Category[]> {
  const result = await db
    .prepare(
      `
      SELECT *
      FROM categories
      WHERE status = 1
      ORDER BY id
      `,
    )
    .all();

  return result.results as unknown as Category[];
}
