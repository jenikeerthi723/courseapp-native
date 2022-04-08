/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import { auth } from '../../firebase';



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error =>Alert.alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => Alert.alert(error.message));
      // navigation.navigate("Home")
  };

  return (
    <View style={styles.container}>

       <View style={styles.text1}>
       <Text style={{fontSize:40}}>LOGIN</Text>
       </View>
      <View style={styles.inputContainer}>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      </View>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white',
  },
  imgStyle:{
    width:'100%',
    height:'100%',
  },
  text1:{
      justifyContent:'center',
      alignItems:'center',
      marginBottom:150,
  },
  inputContainer: {
    width: '100%',
    alignSelf:'center',
    alignContent:'center',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width:'80%',
    alignSelf:'center',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft:40,

  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,

  },
  buttonOutline: {
    backgroundColor: 'black',
    marginTop: 5,
    borderColor: 'white',
    borderWidth: 2,

  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 17,
  },
  buttonOutlineText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 17,
  },
});
