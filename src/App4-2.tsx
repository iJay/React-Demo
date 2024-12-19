import React, { useImperativeHandle } from "react"
import { useEffect, useRef } from "react"

// useRef & forwardRef

interface RefProps {
  aaa: () => void
}

const ChildInput: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  // 3个参数，传入的原有ref对象，一个返回新的对象的函数，依赖项
  useImperativeHandle(ref, () => {
    return {
      aaa () {
        inputRef.current?.focus()
      }
    }
  }, [inputRef])
  return <input ref={inputRef} className="name"></input>
}

const ChildInputWrapper = React.forwardRef(ChildInput)

function App () {
  const inputRef = useRef<RefProps>(null)

  useEffect(() => {
    console.log(inputRef)
    inputRef.current?.aaa()
  }, [])

  return (
    <div>
      <ChildInputWrapper ref={inputRef}></ChildInputWrapper>
    </div>
  )
}

export default App
