import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native'

const TextExample = () => {
   return (
      <View style = {styles.container}>
         <Text style = {styles.text} onPress={
                () => Alert.alert('OnPress','Clicked on Text')
          }>
            <Text style = {styles.capitalLetter}>
               L
            </Text> 
            
            <Text>
               orem ipsum dolor sit amet, sed do eiusmod.
            </Text>
            
            <Text>
               Ut enim ad <Text style = {styles.wordBold}>minim </Text> 
               {'\n'}
               veniam, quis aliquip ex ea commodo consequat.
            </Text>
            
            <Text style = {styles.italicText}>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </Text>
            
            <Text style = {styles.textShadow}>
                {`Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia `}
               deserunt mollit anim id est laborum.
            </Text>

            <Text style = {styles.textStrikethrough}>
            At vero eos et accusamus et iusto odio dignissimos 
            </Text>
            <Text style = {styles.textUnderline}>
            ducimus qui blanditiis praesentium 
            </Text>
            
         </Text>
      </View>
   )
}

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 30,
      padding: 20
   },
   text: {
      color: '#41cdf4',
      fontSize: 15,
   },
   capitalLetter: {
      color: 'red',
      fontSize: 15
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   },
   italicText: {
      color: '#37859b',
      fontStyle: 'italic'
   },
   textStrikethrough: {
      textDecorationLine: 'line-through'
   },
   textUnderline: {
    textDecorationLine: 'underline',
    color: '#013220',
   },
   textShadow: {
      textShadowColor: 'red',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   },
})

export default TextExample;