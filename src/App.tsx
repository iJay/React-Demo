import { useLayoutEffect, useState } from "react"

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666)
    }, 1000)
  })
  return data
}

function App() {
  const [num, setNum] = useState<number>(0)

  useLayoutEffect(() => {
    queryData().then(data => {
      setNum(data)
    })
  }, [])

  return (
    <div onClick={(e) => { setNum((prevNum) => prevNum + 1)}}>
      { num }
    </div>
  )
}

export default App
