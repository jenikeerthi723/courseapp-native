import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffectExample = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count === 0) {
        setCount(10 + Math.random() * 1000000);
    }
  }, [count]);

  console.log("render", count);

  return (
    <>
   <div> Count : {count} </div>

   <button onClick={() => setCount(0)}>Click</button>
   </>
  );
};

export default UseLayoutEffectExample;