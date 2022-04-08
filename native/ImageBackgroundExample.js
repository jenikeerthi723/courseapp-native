import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

class ImageBackgroundExample extends Component {
    render() {
    return(
    <View style={styles.container}>
    <ImageBackground
      source={require('./Images/Clayfin-logo.png')}
      style={styles.imageBackgroundStyle}>
      <Text style={styles.textStyle}>
        The universe... what a concept. You know, the universe is a little bit like the human hand. For example, you have groundmen's center right here and then you have undiscovered worlds and uh, um and sector 8 and up here is tittleman's crest so you can kinda picture it's a little bit like a leaf or uhh, umm, it's not a bowl.
      </Text>
    </ImageBackground>
  </View>
);
}
}


const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
paddingTop: 10,
backgroundColor: '#000',
},
imageBackgroundStyle: {
    width: 280,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
},
textStyle: {
     color: 'blue', 
     fontSize: 18 
}
});

export default ImageBackgroundExample