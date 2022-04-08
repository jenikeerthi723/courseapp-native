import React from 'react';  
import CustomButton from './CustomButton'

const HOCExample2 = (props) => {
    return (
        <div>
          <CustomButton/>
          <CustomButton disabled/>
        </div>
    )
}
  
export default HOCExample2;