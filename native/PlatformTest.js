import React, { Component } from 'react';  
import {StyleSheet,Platform,View,Text } from 'react-native';  
  
class PlatformTest extends Component {  
    constructor(props){
        super(props);
        this.state = {
            platform: '',
            version: ''
         }
         
    }
    componentDidMount() {
        this.detectPlatform()
    }
    
    detectPlatform = () => { 
        const platform =  Platform.OS;
        let version;
        if (platform === 'android')
        {
            version = Platform.Version;
        } else
        { 
            if (platform === 'ios') {
                version = parseInt(Platform.Version, 10);
            }

        }
        console.log(platform)
        console.log(version)
        this.setState({ platform:platform,
                        version:version
                    })
     }
    render() {  
       
        return (  
            <View style = {styles.container}>
           
            <Text style = {styles.textStyle}>
              Platform : {this.state.platform}
            </Text>
            <Text style = {styles.textStyle}>
              Version : {this.state.version}
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
        fontSize: Platform.OS === 'android' ? 30 : 50 ,
        color: Platform.OS === 'android' ? 'black' : 'white' ,
        ...Platform.select({
            android: {
                backgroundColor: 'white'
              },
            ios: {
              backgroundColor: 'black'
            }, 
        }),

    },

  });

  export default PlatformTest