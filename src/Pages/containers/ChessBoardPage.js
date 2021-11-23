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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width } = Dimensions.get("window");

const x = 100;
const y = 200;

export default class ChessBoard extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: "white",
    SwitchLogin: loginPictureBlack,
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
        SunMoon: "🌙",
      });
    } else if (switchValue === false) {
      this.setState({
        switchValue,
        backgroundColor: "white",
        SwitchLogin: loginPictureBlack,
        SunMoon: "☀️",
      });
    }
  }; 

  render() {
    let {
      backgroundColor,
    } = this.state;
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
            style={{ width: windowWidth / 15, height: windowWidth / 15 }}
          >
            <Image
              source={this.state.SwitchLogin}
              style={{ width: windowWidth / 15, height: windowWidth / 15 }}
            />
          </TouchableOpacity>
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
          </TouchableOpacity>
        </View>
        
        {/*Content*/}
        <View stlye={{flex:1}}>
          
        </View>
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

  RightSwitch: {
    position: "absolute",
    right: 0,
    flexDirection: "row"
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
  },
  CheduDarkBlue: {
    color: "#0e113f",
    fontSize: windowWidth / 20,
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












//Von Manuel
/*import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { Chessboard } from "react-chessboard";
import { ChessInstance } from "chess.js";

import { DataTable } from "react-native-paper";

import ReactDOM from "react-dom";



const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;
const firstLogin = true;

const ChessBoardPage = ({ navigation }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.buttonView}>
            <View style={styles.Buttons}>
              <Button
                style={styles.Buttons}
                onPress={() => {
                  navigation.navigate("Home");
                }}
                title="EXIT"
              />
            </View>
            <View style={styles.Buttons}>
              <Button title="SETTINGS" />
            </View>
            <View style={styles.Buttons}>
              <Button title="SAVE" />
            </View>
          </View>
          <View style={styles.ChessBoard}>
            <Chessboard id="BasicBoard" />
          </View>
          <View style={styles.PlayLog}>
            <Text>Play Log</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ChessBoardPage;
*/