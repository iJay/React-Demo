// 函数组件的类型
interface AaaProps {
  name: string,
  content: React.ReactNode
}

const Aaa: React.FunctionComponent<AaaProps> = (props) => { // 它的类型是 FunctionComponent 其返回值类型是ReactNode
  return <div>hello, {props.name} {props.content}</div>
}

const content:JSX.Element = <button>click</button>

function App() {
  return <div>
    <Aaa name="hanbing" content={content} />
  </div>
}

export default App
