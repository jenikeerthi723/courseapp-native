import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import ProductsScreen from './ProductsScreen'
import ContactUsScreen from './ContactUsScreen'

const MyStack = createStackNavigator();

StackNavigatorExample1 = () => {

createMyStack = () => {
  return (
    <MyStack.Navigator initialRouteName='Home'>
      <MyStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My Home Screen"
        }}
      />
      <MyStack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: "My Products"
        }}
      />
       <MyStack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          title: "My Contact Us"
        }}
      />
      </MyStack.Navigator>
    );
}

    return (
          <NavigationContainer>
            {this.createMyStack()}
          </NavigationContainer>
      );

}

export default StackNavigatorExample1;
