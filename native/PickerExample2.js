import React, { Component } from 'react';  
import {StyleSheet,Picker,View,Text } from 'react-native';  
  
class PickerExample2 extends Component {  
    constructor(props){
        super(props);
        this.state = {
            options : [
                {value:'javascript',displayValue:'Learn Javascript'},
                {value:'angular',displayValue:'Learn Angular'},
                {value:'react',displayValue:'Learn React'},
                {value:'react-native',displayValue:'Learn React Native'},
            ],
            value:'react-native',
            index:'3'
         }
         
    }
   
    render() {  
        let pickerItems = this.state.options.map( (option, index) => {
            return <Picker.Item key={index} 
                        value={option.value} 
                        label={option.displayValue} 
                    />
        });
        return (  
            <View style = {styles.container}>
           
            <Text style = {styles.textStyle}>
              Picker Example 2
            </Text>
            <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.value}  
                        onValueChange={(itemValue, itemIndex) =>  
                            this.setState({value: itemValue, index: itemIndex})}  
                    >  

                  {pickerItems}   

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
        width: '80%',  
        color: 'red',  
        justifyContent: 'center',  
        transform: [
            { scaleX: 1 }, 
            { scaleY: 2 }, 
        ]
    }  

  });

  export default PickerExample2