import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ImageBackground, Image, StyleSheet, Platform, View, Animated } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SearchBar } from '@/components/SearchBar'
import { useSearch } from '@/hooks/useSearch';
import { Collapsible } from '@/components/Collapsible';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const HomeScreen = () => {
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
    <Layout>
      <SafeAreaView style={styles.container}>
        <ParallaxScrollView
          renderBackground={() => (
            <View>
              <ImageBackground
                source={require('@/assets/images/index-bg.png')}
                />
            </View>
          )}
          renderForeground={() => (
            <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
              <View style={styles.searchContainer}>
                <SearchBar onSearch={() => {}} />
              </View>
            </Animated.View>
          )}
          />
      </SafeAreaView>
    </Layout>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  container: {},
  searchContainer:{
    // height: 300, // animate search container to move up when search results populate screen
    height: 600,
    justifyContent: 'center',
    // alignContent:'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
