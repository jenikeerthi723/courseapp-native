import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Red from './Red'
import Blue from './Blue'
import Green from './Green'

class FlexTest extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.headerStyle}>flex Test</Text>
        <View style={styles.elementsContainer}>
          <Red/> 
          <Blue/>
         <Green/>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#7f8c8d",
    margin: 20,
  }
}

export default FlexTest