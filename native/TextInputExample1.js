
import React, { Component } from 'react'
import { View, Text,TextInput, Alert, StyleSheet } from 'react-native'

class TextInputExample extends Component {
   state = {
      text: ''
   }
   handleChange = (text) => { 
      console.log(text);
      this.setState({ text: text })
   }
   render() {
      return (
         <View style = {styles.container}>
              <TextInput style = {styles.inputStyle}
            //   <TextInput style = {[styles.inputStyle,{backgroundColor:  '#C0C0C0'}]}
               placeholder = "Input Text"
               placeholderTextColor = "black"
               value= {this.state.text}
               onChangeText = {this.handleChange}
               autoCapitalize={"none"}
               maxLength = {8}
               editable={true}
               //keyboardType={'numeric'} 
               autoFocus={true} 
               /> 
            
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
   },
   inputStyle: {
      margin: 15,
      width:300,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white',
   },
})

export default TextInputExample;