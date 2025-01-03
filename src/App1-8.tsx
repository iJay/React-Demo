// ComponentProps 的类型

import { ComponentProps, CSSProperties, PropsWithChildren, ReactNode } from "react"

interface CccProps extends ComponentProps<'form'> {} // ComponentProps 的类型参数是标签名，比如 a、div、form 这些。

function Ccc (props: CccProps) {
  return <div >ccc</div>
}

function App() {
  return <div>
    <Ccc action="https://www.baidu.com">
      {/**这里如果不想通过参数传入，可以在children里 */}
      <button>child button</button>
    </Ccc>
  </div>
}

export default App
