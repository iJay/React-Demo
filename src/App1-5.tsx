// 其余hook 的类型
import { useCallback, useMemo, createContext, useContext, memo } from "react"

interface BbbProps {
  count: number
}

const CountContext = createContext(111)

function Ccc () {
  // useContext 的类型参数是 Context 内容的类型
  const count = useContext<number>(CountContext)
  return <div>context的值为： { count }</div>
}

function Bbb(props: BbbProps) {
  return (
    <div>
      <h3>{props.count}</h3>
      <Ccc></Ccc>
    </div>
  )
}

// memo 用包裹的函数组件的参数类型
const MemoBbb = memo<BbbProps>(Bbb)

function App() {
  // useCallback 的类型参数是传入的函数的类型
  const fn = useCallback<() => number>(() => {
    return 666
  }, [])

  // useMemo 的类型参数是函数返回值的类型
  const obj = useMemo<{ aaa: number }>(() => {
    return {
      aaa: 1
    }
  }, [])

  return (
    <div>
      <CountContext.Provider value={222}>
        <Bbb count={obj.aaa} />
      </CountContext.Provider>
    </div>
  )
  
}

export default App
