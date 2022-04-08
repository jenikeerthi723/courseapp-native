import React, { useState } from "react";

const functionsCounter = new Set()

const ExamplewithoutuseCallback = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const incrementOtherCounter = () => {
    setOtherCounter(otherCounter + 1)
  }
  const decrementOtherCounter = () => {
    setOtherCounter(otherCounter - 1)
  }

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

export default ExamplewithoutuseCallback;