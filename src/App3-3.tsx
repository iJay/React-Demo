import { produce } from "immer"
import { useState } from "react"

// useState 修改复杂对象也可借助immer
// 由此也可以看出， 在react中，只要涉及到 state 的修改，就必须返回新的对象，不管是 useState 还是 useReducer
function App () {
  const [state, setState] = useState(() => {
    return {
      a: {
        c: {
          e: 0,
          f: 0
        },
        d: 0
      },
      b: 0
    }
  })
  return (
    <div>
        <div onClick={() => {
          setState(produce(state, (state) => {
            state.a.c.e += 2
          }))
        }}>加</div>
        <div>{JSON.stringify(state)}</div>
    </div>
  );
}

export default App
