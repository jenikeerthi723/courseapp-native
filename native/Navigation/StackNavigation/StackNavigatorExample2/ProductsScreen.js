import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';


ProductsScreen = (props) => {
  const { route,navigation } = props
  console.log(route.params)
  const id = route.params?.ItemId
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
      Product Screen - {id}
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
      backgroundColor: '#16a085'
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

export default ProductsScreen;