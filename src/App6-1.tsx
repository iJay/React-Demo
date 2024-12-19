// memo + useMemo + useCallback memo优化Bbb组件
import { memo, useEffect, useState } from "react"

function Aaa () {
  const [, setNum] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random())
    }, 1000)
  }, [])
  // 这里虽然Bbb组件的count没有变化，但是Bbb组件还是会重新渲染，这是没有必要的
  return (
    <div>
      <BbbMemo count={2}></BbbMemo>
    </div>
  )
}

interface BbbProps {
  count: number
}

function Bbb (props: BbbProps) {
  console.log('bbb render');
  return (
    <h2 className="6-1">{props.count}</h2>
  )
 }

 // memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件
 const BbbMemo = memo(Bbb)

 export default Aaa
