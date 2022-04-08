import React, { useReducer } from "react";

const initialState = {count: 0};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerHookExample1 = () => {
  const [counterstate, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };
  
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {counterstate.count}</p>

      <div>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
      </div>
    </div>
  );
}


export default UseReducerHookExample1;