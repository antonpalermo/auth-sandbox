import type { ErrorHandler } from "hono"
import type { ContentfulStatusCode } from "hono/utils/http-status"

import * as HTTPStatusCodes from "@workers/status-codes"

export const onError: ErrorHandler = (err, ctx) => {
  const currentStatus =
    "status" in err ? err.status : ctx.newResponse(null).status

  const statusCode =
    currentStatus !== HTTPStatusCodes.OK
      ? (currentStatus as ContentfulStatusCode)
      : HTTPStatusCodes.INTERNAL_SERVER_ERROR

  const env = ctx.env?.NODE_ENV

  return ctx.json(
    {
      status: statusCode,
      message: err.message,
      stack: env === "production" ? undefined : err.stack
    },
    statusCode
  )
}
