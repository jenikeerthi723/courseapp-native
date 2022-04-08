import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const MyTab = createMaterialTopTabNavigator();

TabNavigatorExample4 = () => {

createMyTab = () => {
  return (
    <MyTab.Navigator initialRouteName='Tab3'>
      <MyTab.Screen
        name="Tab1"
        component={Tab1}
      />
      <MyTab.Screen
        name="Tab2"
        component={Tab2}
      />
       <MyTab.Screen
        name="Tab3"
        component={Tab3}
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

export default TabNavigatorExample4;
