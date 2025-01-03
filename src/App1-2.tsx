// hook的类型

import { useRef, useState } from "react"


function App() {
  // useState可以手动指定类型 一般用推导出的类型
  const [num, setNum] = useState<number>()
  return (
    <>
      <div>app</div>
      <Ccc />
    </>
  )
}

function Ccc () {
  // useRef保存dom引用的时候，参数需要传个null，不然会报错
  const divRef = useRef<HTMLDivElement>(null) // 传入null useRef返回的是React.RefObject类型

  // useRef保存其他内容不能传null，不然也会报错“无法为“current”赋值，因为它是只读属性。”
  // 因为保存的 dom 引用肯定不能改
  const dataRef = useRef<{ num: number}>()
  dataRef.current = { num: 1 }

  return <div ref={divRef}>ccc</div>
}

export default App
