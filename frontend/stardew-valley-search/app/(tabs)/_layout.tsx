import { Tabs } from 'expo-router';
import React from 'react';
import { Linking } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light'; // Define your lightTheme and darkTheme objects
  const backgroundColor = colorScheme === 'dark' ? 'black' : 'white';
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
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
  );
}
