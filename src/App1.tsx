import { ChangeEvent, useState } from 'react'
import './App.css'

// 受控模式
// 使用场景：需要对输入的值做处理之后设置到表单的时候，或者是你想实时同步状态值到父组件。
function App() {

  // 因为是受控组件，随着用户的输入，表单重新渲染很多次，性能会不好
  console.log('app component render...')

  const [value, setValue] = useState('guang')

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    setValue(e.target.value.toUpperCase()) // 对输入的值做处理
  }

  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  )
}

export default App
