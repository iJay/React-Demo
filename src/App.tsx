import { ChangeEvent, useLayoutEffect, useRef } from 'react'
import './App.css'

// 非受控模式
function App() {
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    // 非受控模式通过onChange事件拿到用户输入的值
    console.log(e.target.value)
  }

  // 非受控模式下通过ref也可以拿到用户输入的值
  const inputRef = useRef<HTMLInputElement>(null)

  useLayoutEffect(
    () => {
      setTimeout(() => {
        console.log(inputRef.current?.value)
      }, 2000)
    },
    []
  )

  return (
    <div>
      <input ref={inputRef} defaultValue={'guang'} onChange={onChange} />
    </div>
  )
}

export default App
