// import type { PropsWithChildren, ReactElement } from 'react';
// import { StyleSheet, useColorScheme } from 'react-native';
// import Animated, {
//   interpolate,
//   useAnimatedRef,
//   useAnimatedStyle,
//   useScrollViewOffset,
// } from 'react-native-reanimated';

// import { ThemedView } from '@/components/ThemedView';

// const HEADER_HEIGHT = 250;

// type Props = PropsWithChildren<{
//   headerImage: ReactElement;
//   headerBackgroundColor: { dark: string; light: string };
// }>;

// export default function ParallaxScrollView({
//   children,
//   headerImage,
//   headerBackgroundColor,
// }: Props) {
//   const colorScheme = useColorScheme() ?? 'light';
//   const scrollRef = useAnimatedRef<Animated.ScrollView>();
//   const scrollOffset = useScrollViewOffset(scrollRef);

//   const headerAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateY: interpolate(
//             scrollOffset.value,
//             [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
//             [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
//           ),
//         },
//         {
//           scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
//         },
//       ],
//     };
//   });

//   return (
//     <ThemedView style={styles.container}>
//       <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
//         <Animated.View
//           style={[
//             styles.header,
//             { backgroundColor: headerBackgroundColor[colorScheme] },
//             headerAnimatedStyle,
//           ]}>
//           {headerImage}
//         </Animated.View>
//         <ThemedView style={styles.content}>{children}</ThemedView>
//       </Animated.ScrollView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 250,
//     overflow: 'hidden',
//   },
//   content: {
//     flex: 1,
//     padding: 32,
//     gap: 16,
//     overflow: 'hidden',
//   },
// });
// import type { PropsWithChildren } from 'react';
// import { ImageBackground, StyleSheet } from 'react-native';
// import Animated, {
//   interpolate,
//   useAnimatedRef,
//   useAnimatedStyle,
//   useScrollViewOffset,
// } from 'react-native-reanimated';

// import { ThemedView } from '@/components/ThemedView';

// const HEADER_HEIGHT = 250;

// type Props = PropsWithChildren<{}>;

// export default function ParallaxScrollView({ children }: Props) {
//   const scrollRef = useAnimatedRef<Animated.ScrollView>();
//   const scrollOffset = useScrollViewOffset(scrollRef);

//   const headerAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateY: interpolate(
//             scrollOffset.value,
//             [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
//             [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
//           ),
//         },
//         {
//           scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
//         },
//       ],
//     };
//   });

//   return (
//     <ThemedView style={styles.container}>
//       <ImageBackground
//         source={require('../assets/images/index-bg.png')}
//         style={styles.backgroundImage}
//       >
//         <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
//           <Animated.View style={[styles.header, headerAnimatedStyle]} />
//           <ThemedView style={styles.content}>{children}</ThemedView>
//         </Animated.ScrollView>
//       </ImageBackground>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//   },
//   header: {
//     height: 250,
//     overflow: 'hidden',
//   },
//   content: {
//     flex: 1,
//     padding: 32,
//     gap: 16,
//     overflow: 'hidden',
//   },
// });

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { ImageBackground } from 'react-native';

type ParallaxScrollViewProps = {

  renderBackground: () => React.ReactElement;
  renderForeground: () => React.ReactElement;
  children?: React.ReactNode;
};

export default function ParallaxScrollView({
  // backgroundColor,
  // parallaxHeaderHeight,
  renderBackground,
  renderForeground,
  children,
}: ParallaxScrollViewProps) {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={require('../assets/images/index-bg.png')} style={styles.background}>
        <View>
          {renderBackground()}
        </View>
        <Animated.ScrollView>
          <View>
            {renderForeground()}
          </View>
          <View>{children}</View>
        </Animated.ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
