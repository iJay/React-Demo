import { Reducer, useReducer } from "react";

// useReducer
interface Data {
  result: number;
}

interface Action {
  type: 'add' | 'minus';
  num: number;
}

// 比如消息的已读未读状态？可以用useReducer
function reducer(state: Data, action: Action): Data {
  switch (action.type) {
    case 'add':
      // state.result += action.num // 直接修改state不会触发组件重新渲染
      // return state
      return { result: state.result + action.num } // 必须返回一个新的对象
    case 'minus':
      return { result: state.result - action.num }
    default:
      return state
  }
}

function App () {
  // const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0 })

  // reducer的另外一种写法
  // dispatch 函数后读取 state 并不会拿到更新后的值，也就是说只能获取到调用前的值
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
    return {
      result: param === 'zero' ? 0 : 1
    }
  })

  return (
    <div>
      <button onClick={() => dispatch({ type: 'add', num: 2})}>加</button>
      <button onClick={() => dispatch({ type: 'minus', num: 1})}>减</button>
      <div>{ res.result }</div>
    </div>
  )
}

export default App
