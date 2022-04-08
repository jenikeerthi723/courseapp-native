import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native';

class ScrollViewExample2 extends Component {
 render () {
 
  return (
    // <ScrollView style={styles.container}>
     // <ScrollView style={styles.container} pagingEnabled={true} > 
    <ScrollView style={styles.container} pagingEnabled={true} horizontal={true}> 
 
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Slide 1</Text>
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Slide 2</Text>
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Slide 3</Text>
    </View>
    

    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  textContainer: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  textStyle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default ScrollViewExample2
