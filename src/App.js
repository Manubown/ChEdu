import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Pages/containers/Home";
import IntroScreen from "./Pages/containers/Intro";
import ChessBoard from "./Pages/containers/ChessBoardPage";
import Settings from "./Pages/containers/Setting";
import Login from "./Pages/containers/Login";
import Temp from "./Pages/containers/TempPage";
import Homepage from "./Pages/containers/Homepage";
import Register from "./Pages/containers/Register";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} options={{ title: "ChEdu" }}/>
        <Stack.Screen name="ChessBoard" component={ChessBoard} />
        <Stack.Screen name="Homepage" component={Homepage} options={{ title: "ChEdu" }}/>
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
