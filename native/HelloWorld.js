import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight : 'bold',
    color: 'green'
  }
});

export default HelloWorld;
