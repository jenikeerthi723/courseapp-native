import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Red extends Component {

  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.textContainer}> R </Text>
      </View>
    );
  }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor : 'red',
    },
    textContainer: {
        fontSize: 36,
        fontWeight: '100',
        marginBottom: 24
    }
}

export default Red;
