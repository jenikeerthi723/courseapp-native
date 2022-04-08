import React, { Component } from 'react';  
import {StyleSheet, AppRegistry,Text, View, Image,ImageBackground } from 'react-native';  
  
class ImageExample3 extends Component {  
    render() {  
        return (  
            //Clayfin-logo.png original size is 200 * 200
            // Trying to fit in width:300 and height:200
          <View style={styles.container} >
              {/* <Image 
              source={require('./Images/Clayfin-logo.png')} 
               style={{width: 300,height:200,backgroundColor:"red"}}
              />   */}
              
              {/* <Image 
               source={require('./Images/Clayfin-logo.png')} 
               style={{width: 300,height:200,backgroundColor:"red"}}
               resizeMode="cover"
               />  */}
              {/* <Image 
               source={require('./Images/Clayfin-logo.png')} 
               style={{width: 300,height:200,backgroundColor:"red"}}
               resizeMode="contain"
               />   */}

               {/* <Image 
               source={require('./Images/Clayfin-logo.png')} 
               style={{width: 300,height:200,backgroundColor:"red"}}
               resizeMode="stretch"
               />   */}

               {/* <Image 
               source={require('./Images/Clayfin-logo.png')} 
               style={{width: 300,height:200,backgroundColor:"red"}}
               resizeMode="center"
               />  */}

              <Image 
               source={require('./Images/Clayfin-logo.png')} 
               style={{width: 300,height:200,backgroundColor:"red"}}
               resizeMode="repeat"
               /> 

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
    fixedImageStyle: {
        width: 150, 
        height: 150,
        margin:5
    },

  });

  export default ImageExample3