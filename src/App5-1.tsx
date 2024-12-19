import React from "react"
import { createContext } from "react"

// 类组件使用context
const CountContext = createContext(0)

interface CccProps {
  count: number
}

class Ccc extends React.Component<CccProps> {
  render() {
    return (
      <h2>context 的 值为：{this.props.count}</h2>
    )
  }
}

function Bbb() {
  return (
    <div>
      <CountContext.Consumer>
        {
          (count) => <Ccc count={count}></Ccc>
        }
      </CountContext.Consumer>
    </div>
  )
}

function App () {
  // CountContext.Provider 提供 context 的值
  return (
    <div className="app">
      <CountContext.Provider value={1000}>
        <Bbb></Bbb>
      </CountContext.Provider>
    </div>
  )
}

export default App
