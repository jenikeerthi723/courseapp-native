
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native'

class TextInputExample2 extends Component {
   state = {
      user: '',
      password: ''
   }
   handleUser = (text) => {
      this.setState({ user: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   handleChange = (name,text) => {
    console.log(name)
    console.log(text)
    this.setState({ [name]: text })
 }
   login = () => {
      Alert.alert('Login','user: ' + this.state.user + ' password: ' + this.state.password)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               placeholder = "User"
               placeholderTextColor = "black"
               value= {this.state.user}
               // onChangeText = {this.handleUser}
               onChangeText = {(text)=>{this.handleChange('user',text)}}
               autoCapitalize = "none"
               maxLength = {8}
            />
            
            <TextInput style = {styles.input}
               placeholder = "Password"
               placeholderTextColor = "black"
               value= {this.state.password}
               // onChangeText = {this.handlePassword}
               onChangeText = {(text)=>{this.handleChange('password',text)}}
               autoCapitalize = "none"
               secureTextEntry={true}
               maxLength = {8}
               />
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
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
   input: {
      margin: 15,
      width:300,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: 'white',
   },
   submitButton: {
      backgroundColor: '#27ae60',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

export default TextInputExample2;