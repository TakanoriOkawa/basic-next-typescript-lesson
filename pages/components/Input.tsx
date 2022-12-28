import { useState } from 'react';
const Input = () => {

  const [name, setName] = useState("")

  
  const Names = ['田中', '伊藤', '佐々木'] as const
  
  // typeofは値から型を返す
  type Name = typeof Names


  // const isType = (val: unknown): val is Names => {

  // }


  return (
    <div>
      <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
      {name}
    </div>
  )
}

export default Input