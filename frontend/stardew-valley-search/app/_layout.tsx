import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AnimatedSplashScreen from '../components/AnimatedSplashScreen';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
// Prevent the default splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false); // Hide splash screen after animation or delay
      SplashScreen.hideAsync(); // Manually hide the splash screen
    }, 3000); // Adjust this duration based on your Lottie animation duration
  }, []);

  return (

    <View style={{flex:1}}>

      {isSplashVisible ? (
        <AnimatedSplashScreen />
      ) : (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      )}

      </View>
  );
}
