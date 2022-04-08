import React, { Component } from "react";
import { View, Text } from "react-native";

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
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  textContainer: {
    fontSize: 36,
    fontWeight: "100",
    marginBottom: 24,
  },
};

export default Green;
