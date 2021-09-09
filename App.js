import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Pages/Home';
import IntroScreen from './Pages/Intro';
import MainView from './Pages/MainView';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ChEdu' }}
        />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="MainView" component={MainView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;