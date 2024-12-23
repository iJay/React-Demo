// 使用封装的useInterval hook，实现一个每秒加1的计数器
import { useEffect, useState } from "react"
import useInterval from "./useInterval"

function App() {
  
  const [count, setCount] = useState(0)

  const updateCount = () => {
    console.log(count)
    setCount(count + 1)
  }

  useInterval(updateCount, 1000)

  return <div>{ count }</div>
}

export default App