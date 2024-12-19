import React from "react"
import { useEffect, useRef } from "react"

// useRef & forwardRef

const ChildInput: React.ForwardRefRenderFunction<HTMLInputElement> = ((props, ref) => {
  return <input ref={ref} className="username"></input>
})

const ChildInputWrapper = React.forwardRef(ChildInput)

function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log(inputRef)
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <ChildInputWrapper ref={inputRef}></ChildInputWrapper>
    </div>
  )
}

export default App
