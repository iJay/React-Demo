// EventHandler 的类型

import { MouseEvent, MouseEventHandler } from "react"

interface CccProps {
  // clickHandler: MouseEventHandler<HTMLDivElement>
  children?: React.ReactNode
  clickHandler: (e: MouseEvent<HTMLDivElement>) => void
}

function Ccc (props: CccProps) {
  return <div onClick={props.clickHandler}>ccc</div>
}

function App() {
  return <div>
    <Ccc clickHandler={(e) => {
      console.log(e)
    }}>
    </Ccc>
  </div>
}

export default App
