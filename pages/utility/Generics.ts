// extendsは型を限定する。ある程度を制限したい場合に使う
export type ProductList<T extends string, U> = {
  name: T
  price: U
}

export const product: ProductList<string, number> = {
  name: "机",
  price: 10000
}
