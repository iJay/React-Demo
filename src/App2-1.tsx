// useEffect, useLayoutEffect
import { useEffect, useLayoutEffect, useState } from "react"

function App () {
  const [num, setNum] = useState(0)
  const [count, setCount] = useState(0)
  console.log('render')
  const now = performance.now()
  while (performance.now() - now < 500) {
    // do nothing
  }

  // 多数情况下用useEffect即可，useLayoutEffect会在浏览器layout之前执行，会阻塞渲染
  // 当需要读取或操作DOM时，在不影响性能的情况下，可使用useLayoutEffect
  useLayoutEffect(() => {
    // 这里使用了useLayoutEffect和useEffect，效果不同
    console.log('effect')
    setCount((prevCount) => prevCount + 1)
    // const timer = setInterval(() => {
    //   console.log(num)
    // }, 1000)

    return () => {
      console.log('clean up')
      // clearInterval(timer)
    }
  }, [num])

  return (
    <>
      <div onClick={() => setNum((prevNum => prevNum + 1))}>num: { num }</div>
      <div>count: { count }</div>
    </>
  )
}

export default App
