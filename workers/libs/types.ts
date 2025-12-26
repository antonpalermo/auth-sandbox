import type { OpenAPIHono } from "@hono/zod-openapi"

export type AppBindings = {
  Bindings: CloudflareBindings
}

export type AppOpenAPI = OpenAPIHono<AppBindings>
