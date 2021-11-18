import React from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";

import { Title } from "react-native-paper";

import cheduLogo from "../Pictures/Logo.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;

const Login = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    
    <View style={{ flexGrow: 1 }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Homepage")}>
        <View style={({ flexDirection: "row" }, styles.Column)}>
          <View style={styles.BaseShadow}>
            <Text style={styles.Title}>
              <Text style={styles.CheduBlue}>Ch</Text>
              <Text style={styles.CheduDarkBlue}>Edu</Text>
             </Text>
             {<Image source={cheduLogo} style={styles.Logo} />}
            <Text
              style={{
                 marginTop: windowHeight / 20,
                marginBottom: windowHeight / 20,
                fontSize: windowWidth / 30,
              }}
             >
              Learn to play chess!
             </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "column" }}>
          <Title style={styles.Title}>Login</Title>
          <Text>Username</Text>
          <TextInput
            style={styles.Input}
            value={username}
            onChangeText={onChangeUsername}
            placeholder="Username"
            keyboardType="numeric"
          />
          <Text>Password</Text>
          <TextInput
            secureTextEntry="true"
            style={styles.Input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            keyboardType="numeric"
          />
          <Button
            style={styles.Buttons}
            onPress={() => {
              RequestLogin(username, password);
              navigation.navigate("Home");
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
  console.log(username, password);
};

const styles = StyleSheet.create({
  Input: {
    margin: 20,
  },

  Title: {
    fontWeight: "bold",
    fontSize: 60,
    marginTop: 10,
    marginBottom: 20,
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
  Logo: {
    width: windowWidth / 6.85,
    height: windowWidth / 6.85,
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
    backgroundColor: "#328da8",
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
