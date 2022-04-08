import React from 'react';
import {StyleSheet, View, Text } from 'react-native';


HomeScreen = (props) => {
const { navigation } = props
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
      Home Screen
      </Text>         
    </View>
  );
}

const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d35400'
    },
    titleStyle: {
      fontSize: 36,
      marginBottom: 16
    },
  });

export default HomeScreen;