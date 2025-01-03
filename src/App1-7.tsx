// HTMLAttributes 的类型

import { CSSProperties, HTMLAttributes, PropsWithChildren, ReactNode } from "react"

interface CccProps extends HTMLAttributes<HTMLDivElement> {}

function Ccc (props: CccProps) {
  return <div >ccc</div>
}

function App() {
  return <div>
    <Ccc aria-placeholder="sos">
      {/**这里如果不想通过参数传入，可以在children里 */}
      <button>child button</button>
    </Ccc>
  </div>
}

export default App
