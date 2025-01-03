// useImperativeHandle类型
import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useImperativeHandle } from 'react';

interface GuangProps {
  name: string;
}

interface GuangRef {
  aaa: () => void;
}

// forwardRef 包裹的组件会额外传入 ref 参数，所以它不是 FunctionComponent 类型，而是专门的 ForwardRefRenderFunction 类型。
const Guang: React.ForwardRefRenderFunction<GuangRef, GuangProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // useImperativeHanlde 可以有两个类型参数，一个是 ref 内容的类型，一个是 ref 内容扩展后的类型。
  // useImperativeHanlde 传入的函数的返回值就要求满足第二个类型参数的类型
  // 不过一般没必要写，因为传进来的 ref 就已经是有类型的了，直接用默认推导的就行。
  useImperativeHandle(ref, () => {
    return {
      aaa() {
        inputRef.current?.focus();
      },
      ccc: 'ccc'
    }
  }, [inputRef]);

  return <div>
    <input ref={inputRef}></input>
    <div>{props.name}</div>
  </div>
}

const WrapedGuang = React.forwardRef(Guang);

function App() {
  const ref = useRef<GuangRef>(null);
 
  useEffect(()=> {
    console.log('ref', ref.current)
    ref.current?.aaa();
  }, []);

  return (
    <div className="App">
      <WrapedGuang name="guang" ref={ref}/>
    </div>
  );
}

export default App;
