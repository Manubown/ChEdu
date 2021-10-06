import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Pages/Home";
import IntroScreen from "./Pages/Intro";
import MainView from "./Pages/MainView";
import Settings from "./Pages/Setting";
import Login from "./Pages/Login";
import Temp from "./Pages/TempPage";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "ChEdu" }}
        />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="MainView" component={MainView} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Temp" component={Temp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
