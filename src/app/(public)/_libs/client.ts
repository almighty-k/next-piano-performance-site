import { createClient } from "microcms-js-sdk";
import process from "node:process";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.API_KEY!,
});
