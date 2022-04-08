import React, { useState, useCallback } from "react";

const functionsCounter = new Set()

const UseCallbackHookExample = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)
  
  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])
  
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  }, [otherCounter])

  const decrementOtherCounter = useCallback( () => {
    setOtherCounter(otherCounter - 1)
  }, [otherCounter])

  functionsCounter.add(increment)
  functionsCounter.add(decrement)
  functionsCounter.add(incrementOtherCounter)
  functionsCounter.add(decrementOtherCounter)

  console.log(functionsCounter);
  
  return (
    <>
      Count: {count} <br/>
      Other Count: {otherCounter} <br/>
      <button onClick={increment}>+</button> <br/>
      <button onClick={decrement}>-</button> <br/>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button> <br/>
      <button onClick={decrementOtherCounter}>decrementOtherCounter</button>
    </>
  )
}

export default UseCallbackHookExample;