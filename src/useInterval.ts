import { useCallback, useEffect, useLayoutEffect, useRef } from "react"

function useInterval (fn: Function, delay: number = 0) {
  const callbackRef = useRef<Function>(fn)
  // 保存clean函数并返回
  const cleanUpFnRef = useRef<Function>()

  // 这里使用useCallback是考虑到clean作为参数传递给别的组件
  // useCallback会缓存clean函数，避免不必要的渲染
  const clean = useCallback(() => {
    cleanUpFnRef.current?.()
  }, [])

  // dom 操作完之后同步更新 ref.current 的值，比 useEffect 更早
  // 为什么这里不在渲染过程中更新ref.current的值呢？
  // 官方文档原话 “在渲染过程中中不要写入或读取ref.current,初始化除外。这使得组件行为不可预测”
  useLayoutEffect(() => {
    callbackRef.current = fn
  })

  useEffect(() => {
    const timer = setInterval(() => callbackRef.current(), delay)

    cleanUpFnRef.current = () => {
      clearInterval(timer)
    }
    return clean
  }, [])

  return clean
}

export default useInterval
