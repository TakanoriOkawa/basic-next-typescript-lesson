export const TestLog = () => {

  // type AliasのMapped Typesを試す。

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

  return (
    <button onClick={() => {showType("primary")}} >Log表示</button>
  )
}
