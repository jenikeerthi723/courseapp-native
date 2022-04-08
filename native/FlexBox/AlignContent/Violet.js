import React, { Component } from "react";
import { View, Text } from "react-native";

class Violet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}> V </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    width: 100,
    height: 220,
    backgroundColor: "violet",
  },
  textContainer: {
    fontSize: 36,
    fontWeight: "100",
    marginBottom: 24,
  },
};

export default Violet;
