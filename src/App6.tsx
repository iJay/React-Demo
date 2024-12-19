// memo + useMemo + useCallback
import { useEffect, useState } from "react"

function Aaa () {
  const [, setNum] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random())
    }, 1000)
  }, [])
  // 这里虽然Bbb组件的count没有变化，但是每次setNum都会触发 Bbb 组件的重新渲染
  return (
    <div>
      <Bbb count={2}></Bbb>
    </div>
  )
}

interface BbbProps {
  count: number
}

function Bbb (props: BbbProps) {
  console.log('bbb render');
  return (
    <h2>{props.count}</h2>
  )
 }

 export default Aaa
