import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';

const WelcomeScreen = (props) => {
  console.log('WelcomeScreen --- ./../assets/background.jpg');

  return (
    <ImageBackground
      source={require('./../assets/background.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./../assets/icon.png')}
          style={styles.logoImage}></Image>
        <Text>Sell What You Don`t Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});

export default WelcomeScreen;
