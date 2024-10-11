import React from "react";
import { ImageBackground, StyleSheet, ViewStyle } from "react-native";

interface BackgroundImageProps {
  source: any;
  style?: ViewStyle;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ source, style, children }) => {
  return (
    <ImageBackground source={source} style={[styles.background, style]}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
