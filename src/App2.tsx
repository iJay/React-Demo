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

  useEffect(
    () => {
      console.log('setup')
      queryData().then(data => {
        setNum(data)
      })
      return () => {
        console.log('cleanup')
      }
    },
    // 省略此参数，则在每次重新渲染组件之后，将重新运行 Effect 函数
    // [] // 依赖项为空数组，则 Effect 只会在组件挂载和卸载时运行
    // [1, '2', true, Date.now()]
    // 响应式值包括 props、state 以及所有直接在组件内部声明的变量和函数
    // React 将使用 Object.is 来比较每个依赖项和它先前的值。
  )

  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{ num }</div>
  )
  
}

export default App2
