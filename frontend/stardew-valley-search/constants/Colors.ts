/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#40B5F6';
const tabBackgroundColorLight = '#fff';
const statusBarBackgroundColorLight = '#fff';
const titleColorLight = "#000";
const inputBorderColorLight = "#ccc";
const inputTextColorLight = "#fff";
const linkLight = '#073980';

const tintColorDark = '#fff';
const backgroundColorDark = '#101D60';
const tabBackgroundColorDark = '#101D60';
const statusBarBackgroundColorDark = '#101D60';
const titleColorDark = "#ccc";
const inputBorderColorDark = "#ccc";
const inputTextColorDark = "#000";
const linkDark = '#fff';

export const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    statusBarBackgroundColor:'#fff',
    tabBackgroundColor: tabBackgroundColorLight,
    titleColor:titleColorLight,
    inputBorderColor: inputBorderColorLight,
    inputTextColor:inputTextColorLight,
    link:linkLight,

  },
  dark: {
    text: '#69EDE5',
    background: backgroundColorDark,
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    statusBarBackgroundColor:statusBarBackgroundColorDark,
    tabBackgroundColor: tabBackgroundColorDark,
    titleColor:titleColorDark,
    inputBorderColor:inputBorderColorDark,
    inputTextColor: inputTextColorDark,
    link:linkDark,
  },
};
