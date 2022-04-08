import React from 'react';  
import ButtonStyle from './ButtonStyle'

const CustomButtom = (props) => {
    return (
         <button style={props.styles} disabled={props.disabled}>I am Button</button>
    )
}
  
export default ButtonStyle(CustomButtom);