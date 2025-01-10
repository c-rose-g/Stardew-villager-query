import { View, StatusBar, StatusBarStyle, } from 'react-native';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AnimatedSplashScreen from '../components/AnimatedSplashScreen';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { setStatusBarBackgroundColor, setStatusBarTranslucent } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// Prevent the default splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? Colors.light : Colors.dark;
  const themeContainerStyle = colorScheme === 'light' ? Colors.light : Colors.dark;

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
      ) :(
          <Stack>
          <Stack.Screen
            name="(tabs)"
            options={() => ({
              headerShown: false,
              
              // tabBarOptions: {
              //   style: {
              //     backgroundColor: 'red',
              //     colorScheme: colorScheme,
              //   },
              //   labelStyle: {
              //     color: useColorScheme() === 'dark' ? Colors.dark.text : Colors.light.text,
              //     colorScheme: colorScheme,
              //   },
              // },
            })}
            />
            </Stack>

      )}
      </View>
  );
}
