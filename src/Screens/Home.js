/* eslint-disable react-native/no-inline-styles */


import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Menu from '../../Components/Menu';
import Video from 'react-native-video';

const data = require('../VideoFile/educationvedio.mp4')
const Home = props => {
  const description =
    'SoloLearn is a developer on Google Play. They have tons of education apps. Their specialization is in computer programming.';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Video
          source={data}// the video file
          paused={false}
          resizeMode="cover"
          style={styles.backgroundVideo}
          repeat={true}
        />

        <View style={styles.welcomePara}>
          <View style={styles.welcomePara1}>
            <Image
              style={styles.headerImage}
              resizeMode="contain"
              source={require('../../assets/course/sololearnlogo.png')}
            />
            <Text style={styles.mainHeader}>Welcome to</Text>
          </View>
          <Text
            style={[
              styles.mainHeader,
              {
                fontSize: 30,
                color: 'blue',
                marginTop: 0,
                fontFamily: 'GideonRoman-Regular',
              },
            ]}>
            {props.channelName}
          </Text>

          <Text style={styles.paraStyle}>{description}</Text>
        </View>

        {/* MenuStyle */}
        <View style={styles.menuStyle}>
          <View style={styles.lineStyle} />
          <Menu />
          <View style={[styles.lineStyle, {marginVertical: 10}]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    backgroundColor: '#eee',
    textAlign: 'center',
  },
  backgroundVideo: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    opacity: 0.9,
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  welcomePara: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    backgroundColor: '#E3E4FA',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    opacity: 0.8,
    borderRadius: 30,
    borderColor: '#eee',
    borderWidth: 4,
  },
  welcomePara1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    opacity: 0.7,
    flexDirection: 'row',
  },
  headerImage: {
    height: undefined,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 20,
    width: '100%',
    aspectRatio: 1,
    width: 50,
    borderRadius: 10,
  },
  menuStyle: {
    marginTop: -75,
    zIndex: 10,
    position: 'relative',
  },
  mainHeader: {
    fontSize: 30,
    marginLeft: 5,
    color: 'black',
    textTransform: 'uppercase',
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',
    fontFamily:"SupermercadoOne-Regular"
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: 'black',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily:'SupermercadoOne-Regular',
  },
  lineStyle: {
    marginBottom: 12,
    borderWidth: 0.2,
    borderColor: '#808080',
  },
});

export default Home;
