import { Hono } from "hono"
import { secureHeaders } from "hono/secure-headers"

import { onError } from "@workers/middlewares/on-error"
import { notFound } from "@workers/middlewares/not-found"

const app = new Hono({ strict: true }).basePath("/api")

app.use(secureHeaders())

app.get("/status", ctx => {
  return ctx.json({
    status: "healthy"
  })
})

app.onError(onError)
app.notFound(notFound)

export default app
