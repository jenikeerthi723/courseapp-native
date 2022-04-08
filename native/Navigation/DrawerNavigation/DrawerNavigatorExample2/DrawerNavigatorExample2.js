import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen'
import ProductsScreen from './ProductsScreen'
import ContactUsScreen from './ContactUsScreen'

const MyDrawer = createDrawerNavigator();
const MyStack = createStackNavigator();

DrawerNavigatorExample2 = () => {

  createMyStack = ({navigation}) => {
    return (
      <MyStack.Navigator initialRouteName='Home'>
        <MyStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "My Home Screen",
            headerLeft: () => (
              <Ionicons name="ios-menu" 
              size={24} 
              color="black" 
              onPress = {()=> navigation.openDrawer() }/>
            )          
          }}
        />
        <MyStack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            headerTitle: "My Products",
            headerLeft: () => (
              <Ionicons name="ios-menu" 
              size={24} 
              color="black" 
              onPress = {()=> navigation.openDrawer() }/>
            )          
          }}
        />
         <MyStack.Screen
          name="ContactUs"
          component={ContactUsScreen}
          options={{
            headerTitle: "My Contact Us",
            headerLeft: () => (
              <Ionicons name="ios-menu" 
              size={24} 
              color="black" 
              onPress = {()=> navigation.openDrawer() }/>
            )          
          }}
        />
        </MyStack.Navigator>
      );
  }

createMyDrawer = () => {
  return (
    <MyDrawer.Navigator initialRouteName='HomeDrawer'>
      <MyDrawer.Screen
        name="HomeDrawer"
        component={createMyStack}
      />
      <MyDrawer.Screen
        name="Products"
        component={ProductsScreen}
      />
       <MyDrawer.Screen
        name="ContactUs"
        component={ContactUsScreen}
      />
      </MyDrawer.Navigator>
    );
}

    return (
          <NavigationContainer>
            {this.createMyDrawer()}
          </NavigationContainer>
      );

}

export default DrawerNavigatorExample2;
