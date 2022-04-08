import React from 'react';
import {StyleSheet, View, Text } from 'react-native';


ContactUsScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
      Contact Us Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c0392b'
    },
    titleStyle: {
      fontSize: 36,
      marginBottom: 16
    },
  });

export default ContactUsScreen;