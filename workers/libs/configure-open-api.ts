import { Scalar } from "@scalar/hono-api-reference"

import type { AppOpenAPI } from "@workers/libs/types"

import packageJSON from "../../package.json" with { type: "json" }

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/docs", {
    openapi: "3.0.0",
    info: {
      title: "Atomic API",
      version: packageJSON.version
    }
  })

  app.get(
    "/reference",
    Scalar({
      url: "/docs",
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "fetch"
      }
    })
  )
}
