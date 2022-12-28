// やり方①
const foo = (val: string | number) => {
  if(typeof val === "string") {
    // returnが重要
    return val
  }
  return val
}



// JSのメソッドでisArrayで型ガード
const array = (value: string | string[]) => {
  // 配列型の絞り込み
  if(Array.isArray(value)) {
    return value
  }
  return value
}



// オプショナルの場合の型ガード
const option = (val?: string) => {
  if(!val){
    return val // stringもしくはundefined 空文字の入る可能性があるから
  }
  return val
}


// in演算子の型ガード

type A = {name: string}
type B = {name: string; nickName: string}

// 引数に特定のプロパティがあるかどうかで判定する。
// 特定の表示だけしたい場合の時に、一つだけプロパティを追加して、inを使った絞り込みをしてもいいな。。
const hoge = (val: A | B) => {
  if('nickName' in val) {
    return val
  }
  return val
}



// タグ付きUnionTypes
// inではできないことができる。2つのオブジェクトが全く同じプロパティを持っていた場合。
type C = {name: string,  lang: "ja"} // リテラル
type D = {name: string; lang: "en"}
type E = {name: string; lang: "fr"}

const union = (val: C | D | E) => {
  //　同じプロパティの場合の絞り込み
  // userの権限分岐などで使われたり
  if(val.lang === "ja" || val.lang === "en") {
    return val
  }
  return val
} 

export const switchGuard = (val: C | D | E) => {
  switch(val.lang) {
    case "ja": {
      return val
      break;
    }
    case "en": {
      return val
      break;
    }
    case "fr": {
      return val
      break;
    }
    default: {
      throw Error("lang is not defined")
    }
  }
}

const val = switchGuard({name: "石田", lang:"fr"})
console.log(val)