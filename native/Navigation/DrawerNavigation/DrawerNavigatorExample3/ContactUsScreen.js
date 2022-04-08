import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';


ContactUsScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
      Contact Us Screen
      </Text>
                    
        <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonTextStyle}>Go Back</Text>
        </TouchableOpacity>

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
    buttonTextStyle: {
      color: 'white',
      fontSize: 20
    }
  });

export default ContactUsScreen;