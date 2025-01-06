import { useState } from "react"
import useMergeState from "./useMergeState"

interface CalendarProps {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date) => void
}

function Calendar (props: CalendarProps) {
  const {
    value: propsValue,
    defaultValue,
    onChange
  } = props

  const [mergedValue, setValue] = useMergeState(new Date(), {
    defaultValue,
    value: propsValue
  })

  function changeValue (date: Date) {
    if (propsValue === undefined) {
      setValue(date)
    }
    onChange?.(date)
  }
  return (
    <div>
      {mergedValue?.toLocaleDateString()}
      <div onClick={()=> {changeValue(new Date('2024-5-1'))}}>2024-5-1</div>
      <div onClick={()=> {changeValue(new Date('2024-5-2'))}}>2024-5-2</div>
      <div onClick={()=> {changeValue(new Date('2024-5-3'))}}>2024-5-3</div>
    </div>
  )
}

function App () {
  const [value, setValue] = useState(new Date('2025-1-6'))
  return (
    <div>
      <div>
        <h3>非受控</h3>
        <Calendar defaultValue={new Date('2024-5-1')} onChange={(date) => {
          console.log(date.toLocaleDateString())
        }} />
      </div>
      <hr />
      <div>
        <h3>受控</h3>
        <Calendar value={value} onChange={(date) => {
          console.log(date.toLocaleDateString())
          setValue(date)
        }} />
      </div>
    </div>
  )
}

export default App
