import { betterAuth } from "better-auth"
import { openAPI } from "better-auth/plugins"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

import { drizzle } from "drizzle-orm/neon-serverless"

import * as schema from "@workers/database/schema"
import type { AppOpenAPI } from "@workers/libs/types"

function createAuth(env?: CloudflareBindings): ReturnType<typeof betterAuth> {
  const db = env
    ? drizzle(env.DATABASE_URL!)
    : drizzle(process.env.DATABASE_URL!)

  return betterAuth({
    appName: "atomic",
    database: drizzleAdapter(db, { provider: "pg", schema }),
    baseURL: env ? env.BETTER_AUTH_URL : "",
    secret: env ? env.BETTER_AUTH_SECRET : "",
    plugins: [openAPI()]
  })
}

export default function configureBetterAuth(app: AppOpenAPI) {
  app.on(["GET", "POST"], "/api/*", ctx => {
    return createAuth(ctx.env).handler(ctx.req.raw)
  })
}

// needed for schema generation
export const auth = createAuth()
