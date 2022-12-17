import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

type Prop = {
  text:string
}

const Title = (prop: Prop) => {
  return <p>{prop.text}</p>
}

export default function Home() {
  return (
    <>
      <Title text="test"></Title>
    </>
  )
}


