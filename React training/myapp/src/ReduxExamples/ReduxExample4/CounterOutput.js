import React from 'react';
import './CounterOutput.css';

const CounterOutput = (props) => (
    <div className="CounterOutput">
        <h2>Counter: {props.value}</h2>
    </div>
);

export default CounterOutput;