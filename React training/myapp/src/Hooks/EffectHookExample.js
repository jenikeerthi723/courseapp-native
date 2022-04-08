import React, { useState, useEffect } from "react";

const EffectHookExample = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Karthik')
  
    useEffect(() => {
      console.log(`Effect with NO Deps - ${name} you clicked ${count} times`)
    });

    useEffect(() => {
        console.log(`Effect with Empty Deps  ${name} you clicked ${count} times`)
      },[]);

    useEffect(() => {
        console.log(`Effect with count Deps  ${name} you clicked ${count} times`)
      },[count]);

    useEffect(() => {
        console.log(`Effect with name Deps ${name} you clicked ${count} times`)
      },[name]);  

    
    return (
      <div>
        <p>Hi {name} you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button onClick={() => setName(name === 'Karthik' ? 'Raman' : 'Karthik')}>
          Change name
        </button>
      </div>
    )
  }

  export default EffectHookExample;