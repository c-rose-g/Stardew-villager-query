import { Tabs } from 'expo-router';
import React from 'react';
import { Linking } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
        name="developer"
        options={{
          title: 'Developer',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
            name={'person-outline'}
            color={color}
            onPress={() => Linking.openURL('https://c-rose-g.github.io/')}/>
          ),
        }}
      />
      <Tabs.Screen
        name="github"
        options={{
          title: 'github',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
            name={'logo-github'}
            color={color}
            onPress={() => Linking.openURL('https://github.com/c-rose-g/Stardew-villager-query/')}/>
          ),
        }}
      />
    </Tabs>
  );
}
