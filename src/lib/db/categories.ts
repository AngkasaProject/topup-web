import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { Category } from "@/types/database";

export async function getCategories(): Promise<Category[]> {
  const { env } = await getCloudflareContext({
    async: true,
  });

  const result = await env.DB.prepare(
    `
    SELECT *
    FROM categories
    WHERE status = 1
    ORDER BY id
  `,
  ).all();

  return result.results as unknown as Category[];
}
