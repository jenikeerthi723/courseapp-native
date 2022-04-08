import React, { useState, useRef } from "react";


const UseRefHookExample = () => {
  const [count, setCount] = useState(0)
  const counterEl = useRef(null)
  
  const increment = () => {
    setCount(count + 1)
    console.log(counterEl)
  }

  return (
    <React.Fragment>
      Count: <span ref={counterEl}>{count}</span>
      <button onClick={increment}>+</button>
    </React.Fragment>
  )
}

export default UseRefHookExample;