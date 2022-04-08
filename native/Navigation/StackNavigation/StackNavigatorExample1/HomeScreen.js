import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';


HomeScreen = (props) => {
const { navigation } = props
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
      Home Screen
      </Text>
                    
        <TouchableOpacity
              onPress={() => navigation.navigate('Products')}>
              <Text style={styles.buttonTextStyle}>Go to Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
              onPress={() => navigation.navigate('ContactUs')}>
              <Text style={styles.buttonTextStyle}>Go to Contact Us</Text>
        </TouchableOpacity>

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
    buttonTextStyle: {
      color: 'white',
      fontSize: 20
    }
  });

export default HomeScreen;