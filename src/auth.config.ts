import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db/db";
export default {
    adapter: DrizzleAdapter(db),
    providers:[GitHub({clientId:process.env.AUTH_GITHUB_ID,clientSecret:process.env.AUTH_GITHUB_SECRET})],
    session:{
        strategy:"jwt"
    }
} satisfies NextAuthConfig