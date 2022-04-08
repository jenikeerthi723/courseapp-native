import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

const OtherComponents = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <KeyboardAvoidingView
        behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <SafeAreaView>
          <TextInput style={styles.textInput} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    height: 400,
    width: 400,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 30,
  },
});

export default OtherComponents;