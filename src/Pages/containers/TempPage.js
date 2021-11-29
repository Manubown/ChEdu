import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Switch,
} from "react-native"; //components

import cheduLogo from "../Pictures/Logo.png";
import loginPictureBlack from "../Pictures/login.png";
import loginPictureWhite from "../Pictures/login_white.png";
import registerPictureBlack from "../Pictures/register.png";
import registerPictureWhite from "../Pictures/register_white.png";
import userPictureBlack from "../Pictures/user.png";
import userPictureWhite from "../Pictures/user_white.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width } = Dimensions.get("window");

const x = 100;
const y = 200;

export default class TempPage extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: "white",
    SwitchLogin: loginPictureBlack,
    SwitchRegister: registerPictureBlack,
    SwitchUser: userPictureBlack,
    SunMoon: "☀️",
    ShadowBackgroundColor: "white",
  };

  handleSwitchBackground = () => {
    let { switchValue } = this.state;

    if (switchValue === true) {
      this.setState({
        switchValue,
        backgroundColor: "#121212",
        SwitchLogin: loginPictureWhite,
        SwitchRegister: registerPictureWhite,
        SwitchUser: userPictureWhite,
        SunMoon: "🌙",
      });
    } else if (switchValue === false) {
      this.setState({
        switchValue,
        backgroundColor: "white",
        SwitchLogin: loginPictureBlack,
        SwitchRegister: registerPictureBlack,
        SwitchUser: userPictureBlack,
        SunMoon: "☀️",
      });
    }
  };

  render() {
    let { backgroundColor } = this.state;
    return (
      <View
        style={{
          windowWidth,
          windowHeight,
          backgroundColor: this.state.backgroundColor,
        }}
      >
        {/*Topbar*/}
        <View style={styles.Topbar}>
          {/*Login*/}
          <View style={styles.LoginStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
              style={{ width: windowWidth / 15, height: windowWidth / 15 }}
            >
              <Image
                source={this.state.SwitchLogin}
                style={{ width: windowWidth / 15, height: windowWidth / 15 }}
              />
            </TouchableOpacity>
          </View>

          {/*Register*/}
          <View style={styles.RegisterStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Register")}
              style={{ width: windowWidth / 15, height: windowWidth / 15 }}
            >
              <Image
                source={this.state.SwitchRegister}
                style={{ width: windowWidth / 15, height: windowWidth / 15 }}
              />
            </TouchableOpacity>
          </View>

          {/*User*/}
          <View style={styles.UserStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("User")}
              style={{ width: windowWidth / 15, height: windowWidth / 15 }}
            >
              <Image
                source={this.state.SwitchUser}
                style={{ width: windowWidth / 15, height: windowWidth / 15 }}
              />
            </TouchableOpacity>
          </View>

          {/*Darkmode Switch*/}
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Homepage")}
          >
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
        <View stlye={{ flex: 1 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Topbar: {
    margin: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },

  //Topbar Styles
  RightSwitch: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
  },

  LoginStyle: {
    left: 0,
    flexDirection: "row",
  },

  RegisterStyle: {
    position: "absolute",
    left: windowWidth / 4,
    flexDirection: "row",
  },

  UserStyle: {
    position: "absolute",
    right: windowWidth / 4,
    flexDirection: "row",
  },

  //Homepage styles
  Column: {
    justifyContent: "center",
    alignItems: "center",
  },

  Box: {
    justifyContent: "center",
  },

  Logo: {
    width: windowWidth / 6.85,
    height: windowWidth / 6.85,
  },

  TwoKings: {
    width: 200,
    height: 200,
    borderRadius: 50,
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

  BaseShadow: {
    width: windowWidth / 2,
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: "#328da8",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
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

  ChessBoard: {
    height: (windowHeight / 10) * 5,
    width: (windowHeight / 10) * 5,
    margin: 40,
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

  ChessBoardChildren: {
    fontSize: 10,
    borderWidth: 2,
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
});
