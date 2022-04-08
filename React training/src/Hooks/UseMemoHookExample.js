import React, { useState, useMemo, useCallback, useEffect } from "react";

const UseMemoHookExample = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const memoizedChildComponent = useMemo(() => {
    return <ChildComponent />;
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment Count</button>
      <h3>Non-Memoized Child Component:</h3>
      <ChildComponent />
      <h3>Memoized Child Component:</h3>
      {memoizedChildComponent}
    </div>
  );
}

let count = 0;
const ChildComponent = () => {
    useEffect(() => {
      count += 1;
    });
    return <div>Render Count: {count}</div>;
  
}

export default UseMemoHookExample;