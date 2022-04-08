import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'

let mounted = false;
function mount() {
      if (!mounted) {
         ReactDOM.render(<Child />, document.getElementById('renderhere'));
         mounted = true;
      }
  }

  function unmount() {
     ReactDOM.unmountComponentAtNode(document.getElementById('renderhere'));
     mounted = false;
   } 

const EffectHookCleanupExample = () => {
      return (
         <div>
            <hr/>
            { mounted ? <Child></Child> : null  }
            <hr/>
            <button onClick={mount}>Mount</button>
            <button onClick={unmount}>Un Mount</button>
         </div>
      );
}

const Child = () => {
    const [count, setCount] = useState(0);
    
      useEffect(() => {
        console.log(`Effect with Empty Deps`);
            const timer = setInterval( () => {
            console.log(`setInterval`);
            setCount(prevState => prevState + 1);
            },1000);
            return () => {
                console.log(`clearInterval`); 
                clearInterval(timer);
            }
      },[]);  
  
      return (
         <div>
            <h3>{count} </h3>
         </div>
      );
}

export default EffectHookCleanupExample;