import { Hono } from "hono"
import { secureHeaders } from "hono/secure-headers"

const app = new Hono({ strict: true }).basePath("/api")

app.use(secureHeaders())

app.get("/status", ctx => {
  return ctx.json({
    status: "healthy"
  })
})

export default app
