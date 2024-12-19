// memo + useMemo + useCallback memo优化Bbb组件
// useMemo 作用是缓存计算结果，防止 props 的不必要变化
// useCallback 作用是缓存函数,防止 props 的不必要变化
import { memo, useCallback, useEffect, useMemo, useState } from "react"

function Aaa () {
  const [, setNum] = useState(1)
  const [count, setCount] = useState(2)

  // 这里Bbb组件会重新渲染，是因为bbbCallback函数每次都会随着setNum而重新创建
  // props改变，因此Bbb组件重新渲染
  // function bbbCallback () {
  //   // xxx
  // }

  // useCallback 缓存函数,防止props的不必要变化
  // 也就避免了Bbb组件的不必要渲染
  const bbbCallback = useCallback(() => {
    // xxx
  }, []) // 这里的依赖变化，才会重新创建函数

  const count2 = useMemo(() => {
    return count * 10
  }, [count])

  // 这里useMemo缓存了count2的值，只有count变化，才会重新计算
  // 可以类比vue的computed
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random())
    }, 1000)
  }, [])
  return (
    <div>
      <BbbMemo count={count2} callback={bbbCallback}></BbbMemo>
    </div>
  )
}

interface BbbProps {
  count: number,
  callback: () => void
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
