// useEffect
// effect 直译“副作用” 如果把React核心比作是UI = render(state) 那么对于发起网络数据请求或者开启定时器都是属于副作用

import { useEffect, useState } from "react"

async function queryData () {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666)
    }, 2000)
  })
  return data
}

function App2 () {
  const [num, setNum] = useState(0)

  useEffect(() => {
    queryData().then(data => {
      setNum(data)
    })
  }, [])

  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{ num }</div>
  )
  
}

export default App2
