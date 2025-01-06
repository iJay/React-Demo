import { useCallback, useEffect, useRef, useState } from "react"

function useMergeState<T> (
  defaultStateValue: T,
  props?: {
    defaultValue?: T,
    value?: T,
    onChange?: (value: T) => void
  }
): [T, React.Dispatch<React.SetStateAction<T>>,] {
  const { defaultValue, value: propsValue, onChange } = props || {}

  const isFirstRender = useRef(true)

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue!
    } else if (defaultValue !== undefined) {
      return defaultValue!
    } else {
      return defaultStateValue
    }
  })

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setStateValue(propsValue!)
    }
    isFirstRender.current = false
  }, [propsValue])

  const mergedValue = propsValue === undefined ? stateValue : propsValue

  function isFunction(value: unknown): value is Function {
    return typeof value === 'function'
  }

  const setState = useCallback((value: React.SetStateAction<T>) => {
    let val = isFunction(value) ? value(stateValue) : value
    if (propsValue === undefined) {
      setStateValue(val)
    }
    onChange?.(val);
  }, [stateValue])

  return [mergedValue, setState]
}

export default useMergeState
