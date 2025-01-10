import React, { useEffect } from 'react';
import {SafeAreaView, View, StyleSheet, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function AnimatedSplashScreen() {
  // const [fontsLoaded] = useFonts({
  //   SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  useEffect(() =>{
    SplashScreen.hideAsync();
  })
  return (
    <ImageBackground
      source={require('@/assets/images/index-bg.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <LottieView
          source={require('@/assets/animations/stardew_valley_search.json')}
          // src={'https://lottie.host/13904b7c-8db5-41cb-83a8-dfa34a152194/Vr3IaLEGBp.json'}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});
