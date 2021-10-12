import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { SettingVariables } from "../Scripts/SettingVariables";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;

const Login = ({ navigation }) => {
  const username = null,
    password = null;
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row-reverse" }}>
          <TextInput
            style={styles.Input}
            value={username}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.Input}
            value={password}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
          <Button
            style={styles.Buttons}
            onPress={() => {
              RequestLogin(username, password);
            }}
            title="Login"
          />
        </View>
      </View>
    </View>
  );
};

const RequestLogin = (username, password) => {
  //TODO: API Request
  navigation.navigate("MainView");
};

const styles = StyleSheet.create({
  Input: {
    margin: 20,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 80,
  },

  Buttons: {
    margin: 15,
    width: 150,
  },

  buttonView: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: (windowHeight / 10) * 8,
    margin: 30,
    padding: 20,
  },
  CheduBlue: {
    color: "#00578a",
  },
  PlayLog: {
    flex: 1,
    height: (windowHeight / 10) * 8,
    width: 80,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  CheduDarkBlue: {
    color: "#0e113f",
  },
  ChessBoard: {
    height: (windowHeight / 10) * 8.5,
    width: (windowHeight / 10) * 8.5,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  BottonVield: {
    height: 100,
    width: 100,
    marginBottom: 80,
    backgroundColor: "white",
    borderRadius: 90,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  BaseShadow: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default Login;
