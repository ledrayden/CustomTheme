import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';
import ThemeProvider from './app/contexts/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
          <TabNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  );  
}

