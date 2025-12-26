import { createApp } from "@workers/libs/create-app"
import configureOpenAPI from "./libs/configure-open-api"

const app = createApp()

configureOpenAPI(app)

export default app
