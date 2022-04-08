import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Green extends Component {

  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.textContainer}> G </Text>
      </View>
    );
  }
}

const styles = {
    container: {
      flex: 3,
      backgroundColor : 'green',
    },
    textContainer: {
        fontSize: 36,
        fontWeight: '100',
        marginBottom: 24
    }
}

export default Green;
