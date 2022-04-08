/* eslint-disable quotes */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Slider from "./src/Screens/Slider";
import LoginScreen from './src/Screens/LoginScreen';
import Home from './src/Screens/Home';
import UserData from './src/Screens/UserData';
import About from './src/Screens/About';
import Contact from './src/Screens/Contact';
import Course from './src/Screens/Course';
import CourseDetails from './src/Screens/CourseDetails';
import Screen1 from './src/Screens/CourseList/Screen1';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slider">
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />

        <Stack.Screen
          name="Slider"
          options={{headerShown: false}}
          component={Slider}
        />

        <Stack.Screen name="Screen1" component={Screen1} />

        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} channelName={'SoloLearn'} />}
        </Stack.Screen>

        <Stack.Screen name="Students" component={UserData}
        options={{headerTitleStyle:{fontSize:30},
        headerTitleAlign:"center",
        headerTitle:"Students",
        fontFamily:"Nunito_600SemiBold"}}
         />
         {/* {About Screen} */}
        <Stack.Screen name="About" component={About}
        options={{headerTitleStyle:{fontSize:30},
        headerTitleAlign:"center"}} />

          {/* {Contact Screen} */}
         <Stack.Screen name="Contact" component={Contact}
        options={{headerTitleStyle:{fontSize:30},
        headerTitleAlign:"center"}}

        /> 
         {/* {Course Screen} */}
         <Stack.Screen name="Courses" component={Course}
        options={{headerTitleStyle:{fontSize:30},
        headerTitleAlign:"center"}}/>

        {/* {CourseDetails Screen} */}
       <Stack.Screen name="CourseDetails" component={CourseDetails}
        options={{headerTitleStyle:{fontSize:30},
        headerTitleAlign:"center"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
