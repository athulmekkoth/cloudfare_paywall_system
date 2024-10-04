import { hc } from "hono/client";
import { Apptype } from "@/app/api/[[...routes]]/route";

export const client=hc<Apptype>(process.env.BASE_URL!)