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
const literalUser: User<"日本" | "日本以外"> = {
  name: "田中",
  city: "日本"
}

export const Generics = () => {
  const [name, setName] = useState("")
  const [city, setCity] = useState("");

  // ＊＊まだ完璧に理解できていない。ジェネリクスのUnion型配列にした場合、setUsersで値を格納できない。
  const [users, setUsers] = useState<Japanese[]>([])

  const CheckVal = (obj: Foo<string>) => {
    console.log(obj)
  }

  const register = (name: string , city: string) => {
    // あまり良い実装では無いが、特定の文字列で条件分岐させる。（最初から自由に記述できるtextfieldではなく、選択肢形式にした方が良い。）
    if(city === "大阪府" || city === "東京都" || city === "愛知県" || city === "福岡県") {
      // 値の追加
      setUsers(prev => [...prev, {name: name, city: city}])
      console.log("登録成功")
      return
    }

    console.log("登録失敗")
  }

  const show = () => {
    console.log("日本", jpUsers)
    console.log("アメリカ", usUsers)
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

      <button onClick={() => register(name, city)}>登録</button>
      <button onClick={() => show()}>ユーザー一覧</button>

      {
        users.map((val) => (
          // 同名のユーザーがいた場合エラーになる
          <p key={val.name}>{val.name}: {val.city}</p>
        ))
      }
    </>
  )
}
