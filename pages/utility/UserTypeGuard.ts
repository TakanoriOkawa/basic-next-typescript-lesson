type C = {name: string,  lang: "ja"} // リテラル
type D = {name: string; lang: "en"}
type E = {name: string; lang: "fr"}


// 実装者が独自に用意した型の絞り込み
// booleanが帰る
// 「:user is C」が無いと、trueでも型が絞り込まれない！！
function isUserC(user:any ):user is C {
  return user.lang ===  "ja"
}

// 引数の型がわかっていない時。。
const initUser = (val: unknown) => {
  // ここで条件を加える
  // booleanが帰ってくるので、条件分岐
  if(isUserC(val)){
    return val // 型がCに限定される
  }

  return val
}

initUser({name: "田中", lang: "ja"})
console.log("結果")

// 引数の型がよくわかっていない場合に使える