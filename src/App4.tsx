import { useEffect, useRef } from "react"

// useRef
function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  )
}

export default App
