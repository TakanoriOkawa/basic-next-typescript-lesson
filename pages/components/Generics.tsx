type Foo<T> = {
  foo: T
}

export const Generics = () => {

  const CheckVal = (obj: Foo<string>) => {
    console.log(obj)
  }
  return (
    <button onClick={() => CheckVal({foo: "文字列のみを送る"})}>ジェネリクス</button>
  )
}
