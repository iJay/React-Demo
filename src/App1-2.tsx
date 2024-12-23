// 方法2 虽然解决了闭包 但是会导致每次重新渲染都会重新执行useEffect重跑定时器 定时器就不是每 1s 执行一次了
import { useEffect, useState } from "react"

function App() {
  
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)

    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [count])

  return <div>{ count }</div>
}

export default App