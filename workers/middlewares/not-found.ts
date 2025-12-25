import type { NotFoundHandler } from "hono"

import * as HTTPStatusCode from "@workers/status-codes"
import * as HTTPStatusPhrase from "@workers/status-codes"

export const notFound: NotFoundHandler = ctx => {
  return ctx.json(
    {
      status: HTTPStatusCode.NOT_FOUND,
      message: HTTPStatusPhrase.NOT_FOUND
    },
    HTTPStatusCode.NOT_FOUND
  )
}
