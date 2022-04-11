/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import React, {useState} from 'react';
import {CheckBox} from '@rneui/themed';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [agree, setAgree] = useState(false);
  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert('Plzz fill all the fields');
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}> Levelup your knowledge contactus </Text>

      <Text style={styles.description}>
        Further Queries Contact us soloLearn@gmail.com
      </Text>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your name </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={'name'}
            value={name}
            onChangeText={userdata => setName(userdata)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your Email </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Email'}
            value={email}
            
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your mobile </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={'1234567890'}
            value={phone}
            onChangeText={phone => setPhone(phone)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> How can we help you? </Text>
          <TextInput
            style={[styles.inputStyle, styles.multilineStyle]}
            placeholder={'Tell us about your self'}
            value={message}
            onChangeText={msg => setMessage(msg)}
            numberOfLines={6}
            multiline={true}
          />
        </View>

        {/* checkbox  */}

        <View style={styles.wrapper}>
          {/* <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        /> */}
          <CheckBox
           checked={true}
           //marginRight={80}
           marginLeft={90}
           isChecked = {agree}
           onPress ={() => setAgree(!agree)}
           color={agree ? "#4630EB" : undefined}
           />

          <Text style={styles.wrapperText}>
            I have read and agreed with the TC
          </Text>
        </View>

        {/* submit button  */}

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: agree ? '#4630EB' : 'grey',
            },
          ]}
          disabled={!agree}
          onPress={submit}>
          <Text style={styles.buttonText}> Contact Us </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: 'SupermercadoOne-Regular',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 20,
    fontFamily: 'SupermercadoOne-Regular',
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 10,
  },
  labels: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#7d7d7d',
    paddingBottom: 5,
    fontFamily: 'SupermercadoOne-Regular',
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    // borderColor:"white",
    // borderWidth: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  // texts:{
  //   fontSize:20,
  //   color:"black",

  // },
  buttonText: {
    color: '#eee',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    fontFamily: 'SupermercadoOne-Regular',
  },
  wrapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
    fontFamily: 'SupermercadoOne-Regular',
  },
});

export default Contact;
