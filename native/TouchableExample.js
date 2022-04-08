import React, { Component } from 'react';
import { TouchableNativeFeedback, 
         TouchableHighlight,
         TouchableOpacity,
         TouchableWithoutFeedback, 
         View, Text, Alert, StyleSheet} from 'react-native';

class TouchableExample extends Component {
    onPress(){
        Alert.alert('OnPress','Clicked on Button')
    }
   render() {
      return (
         <View style = {styles.container}>
          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}>
            <Text>Touchable Opacity</Text>
          </TouchableOpacity>

          <TouchableHighlight 
            style={styles.button} 
            onPress={this.onPress}
            underlayColor='red'>
            <Text>Touchable Highlight</Text>
          </TouchableHighlight>

          <TouchableNativeFeedback 
              onPress={this.onPress}
              background={TouchableNativeFeedback.Ripple('blue')}>
            <View style={styles.button}>
              <Text>Touchable Native Feedback(Only Android)</Text>
            </View>
          </TouchableNativeFeedback>
         
         
          <TouchableWithoutFeedback
              style={styles.button}
              onPress={this.onPress}>
            <View style={styles.button}>
              <Text>Touchable Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback>
         </View>
      )
   }
}
const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width:300,
      marginTop:16
    },
});

export default TouchableExample