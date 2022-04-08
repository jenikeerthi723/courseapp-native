import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const MyTab = createBottomTabNavigator();

TabNavigatorExample1 = () => {

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

export default TabNavigatorExample1;
