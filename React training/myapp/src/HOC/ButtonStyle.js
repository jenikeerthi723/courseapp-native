import React from 'react'; 

const styles = {
    default : {
        backgroundColor: '#737373', 
        color: '#eae8e8', 
        padding: '10px'
    }, 
    disable : {
        backgroundColor: '#9c9c9c', 
        color: '#c7c6c6', 
        padding: '10px'
    }
}

const translateProps = (props) => {
    let _styles = {...styles.default}

    if(props.disabled){
        _styles = {..._styles, ...styles.disable};  
    }
    const newProps = {...props,styles:_styles }
    return newProps;
} 

const ButtonStyle = (WrappedComponent) => {
    return function wrappedRender(props) {
        return WrappedComponent(translateProps(props));
    }
}

export default ButtonStyle;