import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import ProductsScreen from "./ProductsScreen";
import ContactUsScreen from "./ContactUsScreen";
import DrawerContent from "./DrawerContent";

const MyDrawer = createDrawerNavigator();
const MyStack = createStackNavigator();

DrawerNavigatorExample3 = () => {
  createMyHomeStack = ({ navigation }) => {
    return (
      <MyStack.Navigator initialRouteName="Home">
        <MyStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "My Home Screen",
            headerLeft: () => (
              <Ionicons
                name="ios-menu"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
      </MyStack.Navigator>
    );
  };

  createMyProductStack = ({ navigation }) => {
    return (
      <MyStack.Navigator initialRouteName="Products">
        <MyStack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            headerTitle: "My Products",
            headerLeft: () => (
              <Ionicons
                name="ios-menu"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
      </MyStack.Navigator>
    );
  };

  createMyContactUsStack = ({ navigation }) => {
    return (
      <MyStack.Navigator initialRouteName="ContactUs">
        <MyStack.Screen
          name="ContactUs"
          component={ContactUsScreen}
          options={{
            headerTitle: "My Contact Us",
            headerLeft: () => (
              <Ionicons
                name="ios-menu"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
      </MyStack.Navigator>
    );
  };

  createMyDrawer = () => {
    return (
      <MyDrawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <MyDrawer.Screen name="HomeDrawer" component={createMyHomeStack} />
        <MyDrawer.Screen name="Products" component={createMyProductStack} />
        <MyDrawer.Screen name="ContactUs" component={createMyContactUsStack} />
      </MyDrawer.Navigator>
    );
  };

  return <NavigationContainer>{this.createMyDrawer()}</NavigationContainer>;
};

export default DrawerNavigatorExample3;
