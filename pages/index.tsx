import { Batch } from './components/batch';
import { Generics } from './components/Generics';
import { TestLog } from './components/TestLog';

let bar = {} as { hoge: number}
bar.hoge = 1;

type Prop = {
  text:string
}

const Title = (prop: Prop) => {
  return <p>{prop.text}</p>
}

// 文字列リテラル型でpropsを指定する
// 「テキスト」のみを許容する
const Component = (props: {text: "テキスト"}) => {
  if(props.text === "テキスト") {
    return <p>テキストが渡されました。</p>
  }
  return <p>それ以外</p>
}

export default function Home() {
  return (
    <>
      <Batch isShow></Batch>
      <Title text="test"></Title>
      <Component text='テキスト'/>

      <TestLog></TestLog>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>

      <Generics />
    </>
  )
}


