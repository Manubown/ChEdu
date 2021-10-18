import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Pages/Home";
import IntroScreen from "./Pages/Intro";
import ChessBoard from "./Pages/ChessBoard";
import Settings from "./Pages/Setting";
import Login from "./Pages/Login";
import Temp from "./Pages/TempPage";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";

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
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="ChessBoard" component={ChessBoard} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="Profile" component={Temp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="Game" component={Temp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
