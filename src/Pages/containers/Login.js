import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Dimensions, Image, Switch } from "react-native";

import { Title } from "react-native-paper";

import cheduLogo from "../Pictures/Logo.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;




export default class Login extends React.Component {
  /*const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null)};*/
  
  state = {
    switchValue: false,
    backgroundColor: "white",
    textColor: "#121212",
    SunMoon: "☀️",
    username: "",
    password: "",
  };
  
  handleSwitchBackground = () => {
    let { switchValue } = this.state;
    
    if (switchValue === true) {
      this.setState({
        switchValue,
        backgroundColor: "#121212",
        textColor: "white",
        SunMoon: "🌙",
      });
    } else if (switchValue === false) {
      this.setState({
        switchValue,
        backgroundColor: "white",
        textColor: "#121212",
        SunMoon: "☀️",
      });
    }
  };
  render(){
    return (
      <View 
        style={{ 
          windowWidth, 
          windowHeight, 
          backgroundColor: this.state.backgroundColor }}>
        
        {/*Topbar*/}
        <View style={styles.Topbar}>
          <View style={styles.RightSwitch}>
            <Text>{this.state.SunMoon}</Text>
            <Switch
              value={this.state.switchValue}
              onValueChange={(switchValue) =>
                this.setState({ switchValue }, () =>
                  this.handleSwitchBackground()
                )
              }
            />
          </View>
        </View>
        
        {/*Logo*/}
        <View style={({ flexDirection: "row" }, styles.Column)}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Homepage")}>
            <View style={styles.BaseShadow}>
              <Text>
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
          </TouchableOpacity>
        </View>
        
        {/*Content*/}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "column" }}>
            <Title style = {{color: this.state.textColor}}>Login</Title>
            <Text style = {{color: this.state.textColor}}>Username</Text>
            <TextInput
              style={styles.Input}
              onChangeText={this.setState.username}
              placeholder="Username"
              keyboardType="numeric"
            />
            <Text style = {{color: this.state.textColor}}>Password</Text>
            <TextInput
              secureTextEntry="true"
              style={styles.Input}
              onChangeText={this.setState.password}
              placeholder="Password"
              keyboardType="numeric"
            />
            <Button
              style={styles.Buttons}
              onPress={() => {
                RequestLogin(this.setState.username, this.setState.password);
                this.props.navigation.navigate("Home");
              }}
              title="Login"
            />
          </View>
        </View>
      </View>
      );
    };
  };

const RequestLogin = (username, password) => {
  //TODO: API Request
  console.log(username, password);
};

const styles = StyleSheet.create({
  
  Topbar: {
    margin: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  RightSwitch: {
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  Column: {
    justifyContent: "center",
    alignItems: "center",
  },
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
    fontSize: windowWidth / 20,
    fontWeight: "bold",
  },
  CheduDarkBlue: {
    color: "#0e113f",
    fontSize: windowWidth / 20,
    fontWeight: "bold",
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
