import React, { Component } from 'react';  
import {StyleSheet,Switch,View,Text } from 'react-native';  
  
class SwitchExample extends Component {  
    constructor(props){
        super(props);
        this.state = {
            value: false,
         }
         
    }
   
    render() {  
       
        return (  
            <View style = {styles.container}>
           
            <Text style = {styles.textStyle}>
              Switch Example 
            </Text>
                <Switch  
                    value={this.state.value}  
                    onValueChange ={(switchValue)=>this.setState({value:switchValue})}
                    />  
           
                <Text style={styles.textStyle}> 
                    Value = {this.state.value ? 'on' :'off'}
                </Text>  
                
           
            </View>
        );  
    }  
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
        color: '#41cdf4',
        fontSize:  30,
    },
   
  });

  export default SwitchExample