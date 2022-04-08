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
              <Text style={styles.buttonTextStyle}>Go Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonTextStyle}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => navigation.popToTop()}>
              <Text style={styles.buttonTextStyle}>Go to First Screen in Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => navigation.push('ContactUs')}>
              <Text style={styles.buttonTextStyle}>Go to Contact Us Again</Text>
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => navigation.replace('ContactUs')}>
              <Text style={styles.buttonTextStyle}>Replace with Contact Us Again</Text>
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => navigation.navigate('Products', { ItemId : 'ABC'})}>
              <Text style={styles.buttonTextStyle}>Passing Parameters</Text>
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