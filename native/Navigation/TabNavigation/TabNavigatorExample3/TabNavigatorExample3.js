import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const MyTab = createMaterialBottomTabNavigator();

TabNavigatorExample3 = () => {

createMyTab = () => {
  return (
    <MyTab.Navigator initialRouteName='Tab3'>
      <MyTab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Tab1',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={24} color={color}/>
          )
        }}
      />
      <MyTab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Tab2',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={24} color={color}/>
          )
        }}
      />
       <MyTab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: 'Tab2',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="script" size={24} color={color}/>
          )
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

export default TabNavigatorExample3;
