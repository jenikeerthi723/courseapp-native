import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,Alert } from 'react-native';


class ImageExample2 extends Component {
    onPress(text){
        Alert.alert('OnPress','Clicked on '+text)
    }
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity 
        style={styles.FacebookStyle} 
        activeOpacity={0.5}
        onPress={()=>this.onPress('Facebook')}>
        
          <Image
            source={require('./Images/facebook.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Login Using Facebook </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.GooglePlusStyle} 
        activeOpacity={0.5}
        onPress={()=>this.onPress('GooglePlus')}>
          <Image
            source={require('./Images/google-plus.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Login Using Google Plus </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

export default ImageExample2;