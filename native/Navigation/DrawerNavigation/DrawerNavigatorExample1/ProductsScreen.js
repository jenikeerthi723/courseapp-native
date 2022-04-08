import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


ProductsScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
      Product Screen
      </Text>      
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
  });

export default ProductsScreen;