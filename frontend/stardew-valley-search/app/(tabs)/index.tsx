import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ImageBackground, Image, StyleSheet, Platform, View, Text, Animated } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SearchBar } from '@/components/SearchBar'
import { useSearch } from '@/hooks/useSearch';
import { Collapsible } from '@/components/Collapsible';

export default function HomeScreen() {
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
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
  },
  searchContainer:{
    height: 500,
    // top:250,
    justifyContent: 'center',
    alignContent:'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
