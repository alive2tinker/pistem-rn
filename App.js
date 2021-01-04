/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import AppraisalScreen from './src/components/AppraisalScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Appraisal" component={AppraisalScreen} />
      </Stack.Navigator>
    </NavigationContainer>);
};

export default App;
