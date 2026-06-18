import { env } from "cloudflare:workers";

export function getDB() {
  return env.DB;
}
