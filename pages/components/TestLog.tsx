import { Colors } from "../utility/Test";

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
  const showSetColors = (color:Colors) => {
    console.log(color)
  }

  return (
    <>
    <button onClick={() => {showType("teriary")}} >タイプを表示</button>
    <button onClick={() => {showSetColors(Colors)}} >カラーを表示</button>
    </>
  )
}
