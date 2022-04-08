import React, { Component } from 'react'
import { View,Button,StyleSheet,Alert } from 'react-native'

const ButtonExample = () => {
   const handlePress = (text) => {
      console.log(text)
   }
   return (
      <View style={styles.container}>
      
      <View style={[{ width: "90%", margin: 10}]}>
       <Button
            onPress = {()=>handlePress('Default')}
            title = "Default button!"
        />
        </View>

        <View style={[{ width: "90%", margin: 10}]}>
      <Button
         onPress = {()=>handlePress('Red')}
         title = "Red button!"
         color = "red"
      />
      </View>

      <View style={[{ width: "90%", margin: 10}]}>
      <Button
         title = "Disabled button!"
         disabled
      />
      </View>
      
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#F5FCFF"
   },
  });
export default ButtonExample