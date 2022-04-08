import React from 'react'; 
import PropTypes from 'prop-types'; 

  
// Component 
class PropTypesExample extends React.Component{ 
    render(){ 
        return( 
                <div> 
                    {/* printing all props */} 
                    <h1> 
                        {this.props.arrayProp} 
                        <br /> 
  
                        {this.props.stringProp} 
                        <br /> 
  
                        {this.props.numberProp} 
                        <br /> 
  
                        {this.props.boolProp} 
                        <br /> 
                    </h1> 
                </div> 
            ); 
    } 
} 
  
// validating prop types 
PropTypesExample.propTypes = { 
    arrayProp: PropTypes.array, 
    stringProp: PropTypes.string, 
    numberProp: PropTypes.number, 
    boolProp: PropTypes.bool, 
} 
  
// creating default props 
PropTypesExample.defaultProps = { 
  
    arrayProp: ['Karthik', 'Raman', 'Rajesh'], 
    stringProp: "Clayfin", 
    numberProp: 1, 
    boolProp: true, 
} 

export default PropTypesExample;