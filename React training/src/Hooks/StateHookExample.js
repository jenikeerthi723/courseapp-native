import React, { useState } from 'react';  

//const StateHookExample = () => {}
function StateHookExample() {  
	const initialcount = 0;
  // Declare a new state variable, "count"  
  const [count, setCount] = useState(initialcount);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(prevState => prevState + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default StateHookExample;