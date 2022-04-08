import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen'
import ProductsScreen from './ProductsScreen'
import ContactUsScreen from './ContactUsScreen'

const MyStack = createStackNavigator();

StackNavigatorExample2 = () => {

createMyStack = () => {
  return (
    <MyStack.Navigator 
        initialRouteName='Home'
        screenOptions = {{
          headerShown: true,
          headerStyle : {
            backgroundColor : '#7f8c8d'
          },
          headerTintColor : 'white' ,
          headerRight :  () => (
            <Ionicons name="ios-power" 
            size={24} 
            color="black" 
            onPress = {()=> {console.log('Logout')} }/>
          )          
        }}
        >
      <MyStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "My Home Screen",
          headerStyle : {
            backgroundColor : '#27ae60'
          },
          headerTintColor : 'white' ,
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

export default StackNavigatorExample2;
