// InterSection Typesのテスト
type Color = {
  a: "red",
  b: "blue"
}

type Color2 = {
  c: "yellow"
}

export type Colors = Color & Color2


// Mapped Typesを試す。（Type Aliasだけの機能）
// Union型やオブジェクトのキーを再利用（マップ）して、新しい型を定義する
type Animals = "dog" | "cat";


// 新しい型

export type AnimalObjType = {
  [key in Animals]: string
}

