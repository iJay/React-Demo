import { useEffect, useRef, useState } from "react";

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}
function Calendar (props: CalendarProps) {
  const {
    value: propsValue,
    defaultValue,
    onChange
  } = props

  const [value, setValue] = useState(() => {
    // 受控模式下 使用传入的propsValue作为内部value的初始值
    if (propsValue !== undefined) {
      return propsValue
    } else { // 否则使用传入的defaultValue作为默认值
      return defaultValue
    }
  })

  const isFirstRender = useRef(true)

  useEffect(() => {
    // 当是非受控模式且非首次渲染 说明模式由受控切换至非受控 同步设置value
    if (propsValue === undefined && !isFirstRender.current) {
      setValue(propsValue)
    }
    isFirstRender.current = false
  }, [propsValue])

  const mergedValue = propsValue === undefined ? value : propsValue

  function changeValue (date: Date) {
    // 非受控模式下 主动更新value
    if (propsValue === undefined) {
      setValue(date)
    }
    onChange?.(date)
  }

  return (
    <div>
      <h3>{mergedValue?.toLocaleDateString()}</h3>
      <p onClick={() => changeValue(new Date('2024-5-1'))}>2024-5-1</p>
      <p onClick={() => changeValue(new Date('2024-5-2'))}>2024-5-2</p>
      <p onClick={() => changeValue(new Date('2024-5-3'))}>2024-5-3</p>
    </div>
  )
}

function App () {
  return (
    <div>
      <Calendar defaultValue={new Date('2024-5-1')} onChange={(date) => {
        console.log(date.toLocaleDateString())
      }} />
    </div>
  )
}

export default App
