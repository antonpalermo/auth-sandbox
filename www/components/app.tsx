import { useEffect, useState } from "react"

export function App() {
  const [message, setMessage] = useState({})

  useEffect(() => {
    async function getMessage() {
      const request = await fetch("/api/status")

      if (!request.ok) {
        return setMessage({ message: "not okay :(" })
      }

      const response = await request.json()
      setMessage(response)
    }

    getMessage()
  }, [])

  return (
    <div>
      <h1>Message from Hono</h1>
      <pre>{JSON.stringify(message, null, 2)}</pre>
    </div>
  )
}
