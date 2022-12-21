import { AnimalObjType, Colors } from "../utility/Test";

export const TestLog = () => {
  // TypeはUnionTypesで設定
  type Type = "primary" | "secondary";

  // ＊＊＊Union Typesを拡張したい場合はどうする？＊＊＊＊
  // OK
  type TypeA = Type | "teriary"

  // NG  "primary" | "secondary"と"teriary"を一つにしてしまい、結果Never型になる
  type TypeB = Type & "teriary"

  const showType = (type: TypeA) => {
    console.log("現在のタイプは" + type + "です")
  }

  // 交差型で作った型を使って初期化
  const Colors: Colors = {
    a: "red",
    b: "blue",
    c: "yellow"
  }
  // カラーを出力
  const showSetColors = (key: keyof Colors) => {
    console.log(Colors[key])
  }

  const animals: AnimalObjType = {
    // オブジェクトがcatかDogに限定される！
    // オブジェクトの初期化などで値を限定させたい場合に有効。
    "cat": "にゃー",
    "dog": "ワン",
  }

  // 動物の鳴き声を表示
  const showAnimalGreet = (key: keyof AnimalObjType) => {
    console.log(animals[key])
  }

  return (
    <>
      <button onClick={() => {showType("teriary")}} >タイプを表示</button>
      <button onClick={() => {showSetColors("a")}} >カラーを表示</button>
      <button onClick={() => {showAnimalGreet("cat")}} >動物の鳴き声を表示</button>
    </>
  )
}
