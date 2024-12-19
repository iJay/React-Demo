// useContext 跨任意层组件传递数据，一般用 Context

import { createContext, useContext } from "react";

// createContext 创建 context
const CountContext = createContext(0);

function App () {
  // CountContext.Provider 提供 context 的值
  return (
    <CountContext.Provider value={10}>
      <Child></Child>
    </CountContext.Provider>
  )
}

function Child () {
  // useContext 获取 context 的值
  const count = useContext(CountContext)
  return <h2>context 的值为：{count}</h2>
}

export default App