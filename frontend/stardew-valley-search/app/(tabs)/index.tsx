import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Animated, ImageBackground, Image, StyleSheet, Platform, View } from 'react-native';
import { SearchBar } from '@/components/SearchBar'
import { StatusBar } from 'expo-status-bar';

type ParallaxScrollViewProps = {

  renderBackground: () => React.ReactElement;
  renderForeground: () => React.ReactElement;
  children?: React.ReactNode;
};

export default function HomeScreen ({renderBackground, renderForeground, children}: ParallaxScrollViewProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={require('@/assets/images/index-bg.png')} style={styles.background}>
        <View>
          <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
            <View style={styles.searchContainer}>
              <SearchBar onSearch={() => {}} />
              </View>
              </Animated.View>
        </View>
          <View>
            <Animated.View style={{ flex: 1 }}>
              <View style={styles.searchContainer}>
                <SearchBar onSearch={() => {}} />
                </View>
                </Animated.View>
          </View>
          {/* <View>{children}</View> */}
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageStyle:{
    height:300,
  },
  searchContainer:{
    // height: 300, // animate search container to move up when search results populate screen
    height: 800,
    justifyContent: 'center',
    alignContent:'center',
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
