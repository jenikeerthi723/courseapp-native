import React, { Component } from 'react';  
import {StyleSheet,Picker,View,Text } from 'react-native';  
  
class PickerExample1 extends Component {  
    constructor(props){
        super(props);
        this.state = {
            value:'',
            index:''
         }
         
    }
   
    render() {  
       
        return (  
            <View style = {styles.container}>
           
            <Text style = {styles.textStyle}>
              Picker Example 1
            </Text>
            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.value}  
                        onValueChange={(itemValue, itemIndex) =>  
                            this.setState({value: itemValue, index: itemIndex})}  
                    >  
                    <Picker.Item label="Learn JavaScript" value="javascript" />  
                    <Picker.Item label="Learn Angular" value="angular" />  
                    <Picker.Item label="Learn React" value="react" /> 
                    <Picker.Item label="Learn React Native" value="react-native" />   
                </Picker>  
                <Text style={styles.textStyle}> 
                    {"Value = "+this.state.value}
                </Text>  
                <Text style={styles.textStyle}> 
                    {"Index = "+this.state.index}
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
    pickerStyle:{  
        fontSize:  30,
        height: 150,  
        width: "80%",  
        color: 'red',  
        justifyContent: 'center', 
        transform: [
            { scaleX: 1 }, 
            { scaleY: 2 }, 
        ]
    }  

  });

  export default PickerExample1