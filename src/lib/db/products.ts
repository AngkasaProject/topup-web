import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getProductsByService(serviceId: number) {
  const { env } = await getCloudflareContext({
    async: true,
  });

  const result = await env.DB.prepare(
    `
    SELECT *
    FROM products
    WHERE service_id = ?
    ORDER BY sell_price ASC
    `,
  )
    .bind(serviceId)
    .all();

  return result.results;
}
