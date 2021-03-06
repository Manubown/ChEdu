import React, { useState, Component } from "react";
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


import PropTypes from "prop-types";
import Chessboard from "chessboardjsx";
import * as Chess from "chess.js"; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor
import CheduChessBoard from "../ChessBoardBown/CheduChessBoard";
import BasicChessBoard from "../ChessBoardBown/BasicChessBoard"

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

        {/*ChessboardEnvironment*/}
        <BasicChessBoard/>
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
    left: windowWidth / 4,
    flexDirection: "row",
  },

  UserStyle: {
    position: "absolute",
    right: windowWidth / 4,
    flexDirection: "row",
  },

  RegisterStyle: {
    position: "absolute",
    left: windowWidth / 4,
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

const squareStyling = ({ pieceSquare, history }) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: { backgroundColor: "#185a5c" },
    ...(history.length && {
      [sourceSquare]: {
        backgroundColor: "#3c8688",
      },
    }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: "#185a5c",
      },
    }),
  };
};