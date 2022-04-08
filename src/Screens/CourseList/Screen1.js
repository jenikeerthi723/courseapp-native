import { StyleSheet, Text, View } from 'react-native'
import {WebView} from 'react-native-webview';
import React from 'react'

const Screen1 = ({route}) => {
  return (
    <View style={styles.container}>

        <WebView 
        source={{
          uri: route.params
        }}
     
       /> 

    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})