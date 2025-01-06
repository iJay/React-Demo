import { useState } from 'react'
import './App.css'
// 非受控模式
// 对于业务组件，我们可以使用非受控模式，这样可以减少组件的渲染次数，提高性能
// 对于基础组件，需要两种模式都支持，因为不同的业务场景可能需要不同的模式
interface CalendarProps {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {

  const { defaultValue = new Date(), onChange } = props

  const [value, setValue] = useState(defaultValue)

  function changeValue(date: Date) {
    setValue(date)
    onChange?.(date)
  }

  return (
    <div>
      <h3>{value.toLocaleDateString()}</h3>
      <div onClick={()=> {changeValue(new Date('2024-5-1'))}}>2023-5-1</div>
      <div onClick={()=> {changeValue(new Date('2024-5-2'))}}>2023-5-2</div>
      <div onClick={()=> {changeValue(new Date('2024-5-3'))}}>2023-5-3</div>
    </div>
  )
}

function App() {
  return <Calendar defaultValue={new Date('2024-5-1')} onChange={(date) => {
    console.log(date.toLocaleDateString());
  }}/>
}

export default App
