import { createAuthClient } from "better-auth/react"

const { signIn, useSession } = createAuthClient()

export function App() {
  const { data, isPending, error } = useSession()

  if (error) {
    throw new Error("authentication error")
  }

  if (isPending) {
    return null
  }

  async function socialSignIn(provider: "google") {
    await signIn.social({
      provider
    })
  }

  return (
    <div>
      <h1>Message from Hono</h1>
      <pre>{JSON.stringify(data?.session, null, 2)}</pre>
      <pre>{JSON.stringify(data?.user, null, 2)}</pre>

      <button onClick={async () => await socialSignIn("google")}>
        Sign in with Google
      </button>
    </div>
  )
}
