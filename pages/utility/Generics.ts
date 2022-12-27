// extendsは型を限定する。ある程度を制限したい場合に使う
export type ProductList<T extends string, U> = {
  name: T
  price: U
}

export const product: ProductList<string, number> = {
  name: "机",
  price: 10000
}

// ジェネリクスを使った関数

// 注意点としては、extendsが無いと、argがunknownになるようだ。
// 試す

// アロー関数の書き方
// 関数名 = <Generic>(arg:Generic) => {}
const upperString = <T extends string | number>(arg: T) => {

  // 型の絞り込み
  if(typeof arg === "string") {
    console.log(arg.toUpperCase())
    return
  }
  console.log(arg.toString());
}

// ジェネリクスを指定する場合
upperString<string>("hoge");
// 引数から型を推論してくれる
upperString("fuga")

upperString(1000)