// CSSProperties 的类型

import { CSSProperties, PropsWithChildren, ReactNode } from "react"

type CccProps2 = PropsWithChildren<{
  content: ReactNode,
  color: CSSProperties['color'],
  styles?: CSSProperties
}>

function Ccc (props: CccProps2) {
  return <div style={props.styles}>ccc, {props.content} {props.children}</div>
}

function App() {
  return <div>
    <Ccc content={<button>click</button>} color="yellow" styles={{ backgroundColor: 'blue'}}>
      {/**这里如果不想通过参数传入，可以在children里 */}
      <button>child button</button>
    </Ccc>
  </div>
}

export default App
