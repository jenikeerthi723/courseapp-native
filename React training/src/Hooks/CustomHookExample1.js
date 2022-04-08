import React, {useState} from 'react';  
import {useDocumentTitle} from './useDocumentTitle'

function CustomHookExample1() {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
  
    useDocumentTitle(`You clicked ${count} times`);
    // useEffect(() => {
    //   document.title = `You clicked ${count} times`
    // });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={incrementCount}>Click me</button>
      </div>
    )
  }
  
  export default CustomHookExample1;