import { createApp } from "@workers/libs/create-app"

import configureOpenAPI from "@workers/libs/configure-open-api"
import configureBetterAuth from "@workers/libs/configure-better-auth"

const app = createApp()

configureOpenAPI(app)
configureBetterAuth(app)

export default app
