import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const MyTab = createBottomTabNavigator();

TabNavigatorExample2 = () => {

createMyTab = () => {
  return (
    <MyTab.Navigator 
        initialRouteName='Tab3'
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'white',
          activeBackgroundColor: '#2980b9',
          inactiveBackgroundColor: '#7f8c8d',
        }}
      >
      <MyTab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}
      />
      <MyTab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />
       <MyTab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <FontAwesome name="gear" size={24} color="black" />
          ),
        }}
      />
      </MyTab.Navigator>
    );
}

    return (
          <NavigationContainer>
            {this.createMyTab()}
          </NavigationContainer>
      );

}

export default TabNavigatorExample2;
