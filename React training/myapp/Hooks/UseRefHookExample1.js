import React, { useRef , useState, useEffect} from "react";

const UseRefHookExample1 = () => {
const counter = useRef(0);
const [name, setName] = useState("Karthik")
  
  useEffect(() => {
    // Every time the component has been re-rendered, the counter is incremented
    counter.current = counter.current + 1;
  }); 

  return (
    <React.Fragment>
        <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
        <button onClick={() => setName(name === 'Karthik' ? 'Raman' : 'Karthik')}>
          Toggle
        </button>
    </React.Fragment>
  );
};

export default UseRefHookExample1;
