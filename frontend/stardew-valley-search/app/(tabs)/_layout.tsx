
import { Tabs } from 'expo-router';
import React, { useState }  from 'react';
import { Linking, View, Button } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // const theme = colorScheme === 'dark' ? 'dark' : 'light'; // Define your lightTheme and darkTheme objects
  // const backgroundColor = colorScheme === 'dark' ? 'black' : 'white';
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(systemColorScheme === 'dark' ? Colors.dark : Colors.light);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === Colors.dark ? Colors.light : Colors.dark));
  };

  const isDarkMode = theme === Colors.dark;
  const backgroundColor = isDarkMode ? Colors.dark.background : Colors.light.background;
  const textColor = isDarkMode ? Colors.dark.text : Colors.light.text;
  const tabBackgroundColor = isDarkMode ? Colors.dark.tabBackgroundColor: Colors.light.tabBackgroundColor;
  const tabIconDefault = isDarkMode ? Colors.dark.tabIconDefault : Colors.light.tabBackgroundColor;

  const tabBarStyle = {
    tabIconDefault,
    textColor,
    backgroundColor: tabBackgroundColor,
    borderTopColor: isDarkMode ? 'gray' : 'lightgray',
  };

  return (
    <View style={{ flex: 1, }}>

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarActiveTintColor: isDarkMode ? Colors.dark.tabIconSelected : Colors.light.tabIconSelected,
        tabBarInactiveTintColor: isDarkMode ? 'gray' : 'darkgray',
      }}

      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'home'} color={color} />
          ),
        }}
        />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Info',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
            name={'information-circle-outline'}
            color={color}
            />
          ),
        }}
        />
    </Tabs>
    </View>
  );
}
