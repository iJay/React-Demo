// useState
import { useState } from "react"

function App() {
  const [num1, setNum1] = useState(1)
  // useState可以是任何值 也可以是函数
  // 作为set函数，其参数可以是新值，也可以为更新函数，该函数的参数是上一次的 state值（虽然不是必须，但优先使用更新函数就对了）
  const [num2, setNum2] = useState(() => {
    const n1 = 1 + 2;
    const n2 = 2 + 3;
    return n1 + n2;
  })

  // 状态为数组或对象
  const [userInfo, setUserInfo] = useState({
    name: 'LeoHan',
    age: 33,
    job: 'Programmer'
  })

  function updateUserInfo() {
    // React状态是只读，所以更新数组或者对象应该替换而不是改变现有对象
    setUserInfo(prevUserInfo => { return {...prevUserInfo, age: prevUserInfo.age + 1}})
  }

  return (
    <>
      <div onClick={() => setNum1(num1 + 1)}>{ num1 }</div>
      <div onClick={() => setNum2(num2 => num2 + 2)}>{ num2 }</div>
      <div>
        <p>姓名：{ userInfo.name }</p>
        <p>年龄：{ userInfo.age }</p>
        <p>职业：{ userInfo.job }</p>
        <button onClick={() => updateUserInfo()}>下一年</button>
      </div>
    </>
  )
}

export default App
