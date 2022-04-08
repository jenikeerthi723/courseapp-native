import React, { useState } from 'react';  
  
function MultipleStateHookExample1() {  
    const initialcount = { 
        counterA : 0,
        counterB : 0
    };
   
  const [count, setCount] = useState(initialcount);  
  
  return (  
    <div>  
      <p>Counter A : {count.counterA} </p>  
      <button onClick={() => setCount(prevState => { return {...prevState, counterA : prevState.counterA + 1 } } )}>    
       Increment A 
      </button>  
      <p>Counter B : {count.counterB} </p> 
      <button onClick={() => setCount(prevState => { return {...prevState, counterB : prevState.counterB + 1 } } )}>  
       Increment B
      </button> 
    </div>  
  );  
}  
export default MultipleStateHookExample1;