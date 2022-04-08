import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';


class ScrollViewExample1 extends Component {
 render () {
    const NumArray = Array.from(Array(50).keys())
 
  return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
        <Text style={styles.headertextStyle}>ScrollView</Text>
    </View>
    {/* <View style={styles.scrollView}> */}
      {/* <ScrollView style={styles.scrollView}> */}
      <ScrollView style={styles.scrollView}
        onScroll={(nativeElem)=>{console.log('Scrolling'+nativeElem.nativeEvent.contentOffset.y)}}
      >
      {NumArray.map((value,index) => (
      <View key={index} style={styles.scrolltextContainer} >
        <Text  style={styles.text}>
         Number : {value}
        </Text>
      </View>
      ))}
      </ScrollView>
      {/* </View> */}

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  textContainer: {
    alignItems: 'center'
  },
  headertextStyle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: 'blue',
  },
  scrolltextContainer: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
  },
});

export default ScrollViewExample1
