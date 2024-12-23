// 方法3 在方法2的基础上 使用useRef 帮助引用一个不需要渲染的值
import { useEffect, useState, useRef } from "react"

function App() {
  
  const [count, setCount] = useState(0)

  const updateCount = () => {
    console.log(count)
    setCount(count + 1)
  }

  // 通过 useRef 创建 ref 对象，保存执行的函数
  const countRef = useRef(updateCount)
 
  // 每次渲染更新 ref.current 的值为最新函数
  // ref.current 的值改了不会触发重新渲染
  countRef.current = updateCount

  useEffect(() => {

    const timer = setInterval(() => countRef.current(), 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <div>{ count }</div>
}

export default App