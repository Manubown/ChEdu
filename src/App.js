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
import AboutUs from "./Pages/containers/AboutUs";
import User from "./Pages/containers/User";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ title: "ChEdu_Home" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Chedu" }}
        />

        <Stack.Screen
          name="Temp"
          component={Temp}
          options={{ title: "ChEdu_Temp" }}
        />

        <Stack.Screen
          name="User"
          component={User}
          options={{ title: "ChEdu_User" }}
        />

        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "ChEdu_Register" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "ChEdu_Login" }}
        />
        <Stack.Screen
          name="ChessBoard"
          component={ChessBoard}
          options={{ title: "ChEdu_ChessBoard" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
