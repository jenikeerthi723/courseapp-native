import React, { useState } from 'react';  
  
function MultipleStateHookExample () {  
    const initialcountA = 0;
    const initialcountB = 0;
  // Declare a new state variable, "count"  
  const [countA, setCountA] = useState(initialcountA);  
  const [countB, setCountB] = useState(initialcountB);  

  return (  
    <div>  
      <p>Counter A : {countA} </p>  
      <button onClick={() => setCountA(prevState => { return prevState + 1} )}>    
       Increment A 
      </button>  
      <p>Counter B : {countB} </p> 
      <button onClick={() => setCountB(prevState => { return prevState + 1} )}>  
       Increment B
      </button> 
    </div>  
  );  
}  

export default MultipleStateHookExample;