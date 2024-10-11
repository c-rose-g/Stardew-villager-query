// source={require('@/assets/animations/stardew_valley_search.json')}
//       source={require('@/assets/images/index-bg.png')}
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedSplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('@/assets/images/index-bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      {/* Lottie Animation */}
      <LottieView
        source={require('@/assets/animations/stardew_valley_search.json')}
        autoPlay
        loop={false} // Set this to true if you want it to loop
        style={styles.lottie}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: width, // Fullscreen background
    height: height, // Fullscreen background
    zIndex: -1, // Send it to the back
  },
  lottie: {
    width: 300, // Adjust to your animation's size
    height: 300,
  },
});

export default AnimatedSplashScreen;
