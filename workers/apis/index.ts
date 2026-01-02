import { Hono } from "hono"

const app = new Hono()

app.get("/api/sample", ctx => {
  return ctx.json({
    message: "sample"
  })
})

export default app
