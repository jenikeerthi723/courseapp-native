import React from 'react';


const Select = (props) => {
	console.log(props.value)
	return(<div className="form-group">
			<label htmlFor={props.name}> {props.title} </label>
		    <select
		      id = {props.name}
		      name={props.name}
		      value={props.value}
			  onChange={props.handleChange}
			  multiple={props.multiple}
		      className="form-control"
			  >
		     <option value="" disabled>{props.placeholder}</option>
		      {props.options.map(option => {
		        return (
		          <option
		            key={option}
		            value={option}
					label={option}>{option}</option>
		        );
		      })}
		    </select>
  </div>
  )
}

export default Select;