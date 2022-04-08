import React , {useEffect,useRef} from 'react';

const UseRefHookExample2 = () => {
    const intervalRef = useRef();
    
    useEffect(() => {
            const id = setInterval(() => {
            console.log("A second has passed" );
        }, 1000);
        intervalRef.current = id;
      },[]); 

   
    const handleCancel = () => {
        console.log("clearInterval");
        clearInterval(intervalRef.current);
    }

    return (
        <React.Fragment>
            <button onClick={handleCancel}>Clear</button>
        </React.Fragment>

    );

}

export default UseRefHookExample2;