// userReducer 修改复杂对象

import { Reducer, useReducer } from "react"

interface Data {
  a: {
    c: {
      e: number
      f: number
    }
    d: number
  },
  b: number
}

interface Action {
  type: 'add' | 'minus';
  num: number;
}

function reducer(state: Data, action: Action): Data {
  // 复杂对象的修改可以借助immer
  switch (action.type) {
    case 'add':
      return {
        ...state,
        a: {
          ...state.a,
          c: {
            ...state.a.c,
            e: state.a.c.e + action.num
          }
        }
      }
  }
  return state
}

function App () {
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (param) => {
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
        <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
        <div>{JSON.stringify(res)}</div>
    </div>
  );
}

export default App
