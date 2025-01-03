// useReducer的类型

import { Reducer, useReducer } from "react"

interface Data {
  result: number
}

interface Action {
  type: string
  payload: number
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case 'add':
      return { result: state.result + action.payload }
    case 'minus':
      return { result: state.result - action.payload }
    default:
      return state
  }
}

function App() {
  // useReducer 可以传一个类型参数也可以传两个
  // const [data, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 1 })
  const [data, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
    return param === 'zero' ? { result: 0 } : { result: 1 }
  })
  return <div>
    <h3>{ data.result }</h3>
    <div>
      <button onClick={() => dispatch({ type: 'add', payload: 1 })}>add</button>
      <button onClick={() => dispatch({ type: 'minus', payload: 1 })}>minus</button>
    </div>
  </div>
}

export default App
