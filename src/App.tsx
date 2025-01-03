// JSX 的类型
interface AaaProps {
  name: string,
  // content: React.ReactElement // React.ReactElement类型不能为null、number、string、undefined、boolean
  content: React.ReactNode // React.ReactNode类型可以为ReactElement、null、number、string、undefined、boolean
}

// 组件我们一般不写返回值类型，就用默认推导出来的类型JSX.Element
function Aaa (props: AaaProps) {
  return <div>hello, {props.name} {props.content}</div>
}

const content:JSX.Element = <button>click</button>

function App() {
  return <div>
    <Aaa name="hanbing" content={content} />
  </div>
}

// 以上涉及到的三种类型关系如下：
// ReactNode > ReactElement > JSX.Element
// 描述一个参数接收 JSX 类型，就用 ReactNode 就行
export default App
