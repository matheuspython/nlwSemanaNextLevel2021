import { useState } from 'react'
interface ButtonProps {
  color: string
  children: string
}

export function Button(props: ButtonProps){
  
  const [counter, setCounter] = useState(1)

  function increment(){
    setCounter(counter + 1)
  }

  return(
    <button onClick={increment} style={{ backgroundColor:props.color }}>
      {props.children} <strong>{counter}</strong>
    </button>
  )
}