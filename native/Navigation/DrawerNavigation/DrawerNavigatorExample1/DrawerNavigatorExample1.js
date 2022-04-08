import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen'
import ProductsScreen from './ProductsScreen'
import ContactUsScreen from './ContactUsScreen'

const MyDrawer = createDrawerNavigator();

DrawerNavigatorExample1 = () => {

createMyDrawer = () => {
  return (
    <MyDrawer.Navigator initialRouteName='Home'>
      <MyDrawer.Screen
        name="Home"
        component={HomeScreen}
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

export default DrawerNavigatorExample1;
