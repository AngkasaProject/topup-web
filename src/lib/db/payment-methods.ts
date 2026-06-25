import { getCloudflareContext } from "@opennextjs/cloudflare";

import type { PaymentMethod } from "@/types/database";

export async function getPaymentMethods(): Promise<PaymentMethod[]> {
  const { env } = await getCloudflareContext({
    async: true,
  });

  const result = await env.DB.prepare(
    `
    SELECT *
    FROM payment_methods
    WHERE status = 1
    ORDER BY group_name, sort_order
  `,
  ).all();

  return result.results as unknown as PaymentMethod[];
}
