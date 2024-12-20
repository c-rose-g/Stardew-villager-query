import React, {useEffect, useRef} from 'react';
import { Dimensions, SafeAreaView, Animated, ImageBackground, Image, StyleSheet, Platform, View } from 'react-native';
import { SearchBar } from '@/components/SearchBar'
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

type ParallaxScrollViewProps = {

  renderBackground: () => React.ReactElement;
  renderForeground: () => React.ReactElement;
  children?: React.ReactNode;
};

export default function HomeScreen ({renderBackground, renderForeground, children}: ParallaxScrollViewProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get('window');
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? Colors.light : Colors.dark;
  const themeContainerStyle = colorScheme === 'light' ? Colors.light : Colors.dark;

  const container = {
    flex: 1,
  };
  const searchContainer = {
    height: height,
    width: width,
    justifyContent: 'center' as 'center',
  };

  const background = {
    height:height,
  };

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        delay: 100,
        useNativeDriver: true,
      }).start();
    };

    startAnimation();
  }, [fadeAnim]);


  return (
      <SafeAreaView style={[{ backgroundColor: themeContainerStyle.background }, {flex:1}]}>
        <StatusBar style="auto" />
        <ImageBackground source={require('@/assets/images/index-bg.png')} style={background}>
        <View style={container}>
          {/* <Animated.View style={{ opacity: fadeAnim, flex: 2 }}> */}
            <View style={searchContainer}>
              <SearchBar onSearch={() => {}} />
              </View>
              {/* </Animated.View> */}
        </View>

          <View>{children}</View>
      </ImageBackground>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  background: {
    flex:1,
    height:'100%'
  },
});
