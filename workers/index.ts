import { createApp } from "@workers/libs/create-app"

const app = createApp()

app.get("/status", ctx => {
  return ctx.json({
    status: "healthy"
  })
})

export default app
