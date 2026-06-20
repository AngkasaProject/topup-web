import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { Service } from "@/types/database";

export async function getServices(): Promise<Service[]> {
  const { env } = await getCloudflareContext({
    async: true,
  });

  const result = await env.DB.prepare(
    `
    SELECT *
    FROM services
    WHERE status = 1
    ORDER BY name
    `,
  ).all();

  return result.results as unknown as Service[];
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const { env } = await getCloudflareContext({
    async: true,
  });

  const result = await env.DB.prepare(
    `
    SELECT *
    FROM services
    WHERE slug = ?
    LIMIT 1
    `,
  )
    .bind(slug)
    .first();

  return result as Service | null;
}
