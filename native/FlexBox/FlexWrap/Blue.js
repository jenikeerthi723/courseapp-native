import React, { Component } from "react";
import { View, Text } from "react-native";

class Blue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}> B </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    width: 100,
    height: 220,
    backgroundColor: "blue",
  },
  textContainer: {
    fontSize: 36,
    fontWeight: "100",
    marginBottom: 24,
  },
};

export default Blue;
