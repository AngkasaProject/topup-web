import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getServiceSettings(serviceId: number) {
  const { env } = await getCloudflareContext({
    async: true,
  });

  return await env.DB.prepare(
    `
    SELECT *
    FROM service_settings
    WHERE service_id = ?
    LIMIT 1
    `,
  )
    .bind(serviceId)
    .first();
}

export async function updateServiceSettings(
  serviceId: number,
  markup: number,
  discountPercent: number,
) {
  const { env } = await getCloudflareContext({
    async: true,
  });

  return await env.DB.prepare(
    `
    UPDATE service_settings
    SET
      markup = ?,
      discount_percent = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE service_id = ?
    `,
  )
    .bind(markup, discountPercent, serviceId)
    .run();
}
