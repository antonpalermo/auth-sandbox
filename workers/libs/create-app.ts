import { OpenAPIHono } from "@hono/zod-openapi"
import { secureHeaders } from "hono/secure-headers"

import { onError } from "@workers/middlewares/on-error"
import { notFound } from "@workers/middlewares/not-found"

import type { AppBindings } from "@workers/libs/types"

export function createRoute() {
  return new OpenAPIHono<AppBindings>({ strict: false })
}

export function createApp() {
  const app = createRoute()

  app.use(secureHeaders())

  app.onError(onError)
  app.notFound(notFound)

  return app
}
