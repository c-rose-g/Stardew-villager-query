import React, {useEffect, useRef} from 'react';
import { ImageBackground, Image, StyleSheet, Platform, View, Text, Animated } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SearchBar } from '@/components/SearchBar'
import { useSearch } from '@/hooks/useSearch';
import { Collapsible } from '@/components/Collapsible';

export default function HomeScreen() {
  const {results, search} = useSearch();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        delay: 100,
        useNativeDriver: true,
      }).start();
    };

    startAnimation();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <ParallaxScrollView
        renderBackground={() => (
          <View>
            <ImageBackground
              source={require('@/assets/images/index-bg.png')}
              style={styles.backgroundImage}
            />
          </View>
        )}
        renderForeground={() => (
          <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
            <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
              <ThemedText type="title">Search Bar</ThemedText>
              <SearchBar onSearch={search} />

            </View>
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  bgImage: {
    height: 610,
    width: 375,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
