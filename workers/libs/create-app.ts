import { Hono } from "hono"
import { secureHeaders } from "hono/secure-headers"

import { onError } from "@workers/middlewares/on-error"
import { notFound } from "@workers/middlewares/not-found"

import type { AppBindings } from "@workers/libs/types"

export function createApp() {
  const app = new Hono<AppBindings>({ strict: true })

  app.use(secureHeaders())

  app.onError(onError)
  app.notFound(notFound)

  return app
}
