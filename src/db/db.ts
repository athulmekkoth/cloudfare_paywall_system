import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql=neon(process.env.DB_URL!)
console.log(sql)
export const db = drizzle(sql)