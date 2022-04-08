import React, { Component } from "react";
import { View, Text } from "react-native";
import Red from "./Red";
import Blue from "./Blue";
import Green from "./Green";
import Yellow from "./Yellow";
import Violet from "./Violet";

class AlignContentTest extends Component {
  render() {
    return (
      // flexWrap :  wrap , wrap-reverse 
	  // alignContent : flex-start , center , flex-end , space-between , space-around , stretch

      <View style={styles.container}>
        <Text style={styles.headerStyle}>alignContent Test</Text>
        <View style={styles.elementsContainer}>
          <Red />
          <Blue />
          <Green />
          <Yellow />
          <Violet />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 48,
    flex: 1,
  },
  headerStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 24,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#7f8c8d",
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
	  alignContent: "center",
  },
};

export default AlignContentTest;
