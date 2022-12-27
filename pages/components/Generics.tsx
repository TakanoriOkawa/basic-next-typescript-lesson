import { useState } from "react"

// Tの初期値
type Foo<T = string> = {
  foo: T
}

// Userデータの型を後から限定したいという用件の場合
// ベースの型
type User<T> = {
  name: string
  city: T
}

// 日本仕様
type Japanese = User<"大阪府" | "東京都" | "愛知県" | "福岡県">

// アメリカ仕様
type American = User<"NY" | "LOS">


const jpUsers: Japanese[] = []
const usUsers: American[] = []

// 日本ユーザー作成
const jpUser: Japanese = {
  name: "伊藤",
  city: "愛知県"
}

// アメリカユーザー作成
const usUser: American = {
  name: "ジョン",
  city: "NY"
}

// 直接指定
const user: User<"日本" | "日本以外"> = {
  name: "田中",
  city: "日本"
}

export const Generics = () => {
  console.log("rendering🌟")

  const [name, setName] = useState("")
  const [city, setCity] = useState("")

  const CheckVal = (obj: Foo) => {
    console.log(obj)
  }

  return (
    <>
      <button onClick={() => CheckVal({foo: "文字列のみを送る"})}>文字列の型を送る</button>

      <br />
      <label>名前</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

      <br />
      <label>都市</label>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button>登録</button>
    </>
  )
}
