import React from 'react';  
import WithToggle from './WithToggle'

const ViewEditToggle = (props) => {
    console.log(props.toggleStatus)
    return (
        <>
            { props.toggleStatus 
            ? <input type="text" value={props.value} onChange={props.changeHandler} placeholder={props.placeholder} />
            : <span>{ props.value }</span>
            }
            <button onClick={props.toggle}>
            { props.toggleStatus ? 'View Mode' : 'Edit Mode' }
            </button>
        </>
    )
};
  
export default WithToggle(ViewEditToggle);