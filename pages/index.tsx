import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
      <Title text="test"></Title>
      <Component text='テキスト'/>
    </>
  )
}


