import React, {useState} from 'react';  
import ViewEditToggle from './ViewEditToggle'

const HOCExample3 = (props) => {
    const [inputValue, setInputValue] = useState ('Clayfin');
    const onChangeHandler= (e) => setInputValue(e.target.value);
    return (
        <div>
           <ViewEditToggle 
           title='Clayfin' 
           value={inputValue}
           placeholder="Text Message"
           changeHandler={onChangeHandler}
           />
        </div>
    )
}
  

export default HOCExample3;