import React from 'react';  
import WithNameClayfinProp from './WithNameClayfinProp'

const HOCExample1 = (props) => {
    return (
        <h1>
            Hello {props.name} !!!
        </h1>
    )
}
  

export default WithNameClayfinProp(HOCExample1);