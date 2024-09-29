import { defineConfig } from 'drizzle-kit'
import { config } from "dotenv"
import path from 'path'

config({path:".env.local"})
export default defineConfig({
  dialect : "postgresql",
  schema :"./src/db/schema.ts",
  dbCredentials:{
    url:process.env.DB_URL!,
  },
verbose:true,
strict:true,
    
})