import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
  Switch,
  ImageBackground,
} from "react-native"; //components

import { UserData } from "../../User/UserData";

import { AppearanceProvider } from "react-native-appearance";

import CheduChessBoard from "../ChessBoardBown/CheduChessBoard";

import { Stage, Layer } from "react-konva";
import cheduLogo from "../Pictures/Logo.png";
import twokings from "../Pictures/two_kings.jpg";
import loginPictureBlack from "../Pictures/login.png";
import arrowRight from "../Pictures/right-arrow.jpeg";
import loginPictureWhite from "../Pictures/login_white.png";
import registerPictureBlack from "../Pictures/register.png";
import registerPictureWhite from "../Pictures/register_white.png";
import userPictureBlack from "../Pictures/user.png";
import userPictureWhite from "../Pictures/user_white.png";
import ChessBoardImage from "../Pictures/chessBoard.png";

import { white } from "chalk";

import { RequestLogin } from "../Connection/ApiCommunication";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width } = Dimensions.get("window");

const x = 100;
const y = 200;

export default class Homepage extends React.Component {
  state = {
    active: 0,
    xTabOne: 0, //x co-ordinate of tab one
    xTabTwo: 0, //x co-ordinate of tab two
    xTabThree: 0, //x co-ordinate of tab three
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateXTabThree: new Animated.Value(width * 2),
    translateXTabFour: new Animated.Value(width * 3),
    translateY: -1000,
    switchValue: false,
    backgroundColor: "white",
    SwitchLogin: loginPictureBlack,
    SwitchRegister: registerPictureBlack,
    SwitchUser: userPictureBlack,
    SunMoon: "☀️",
    ShadowBackgroundColor: "white",
    StateUserData: UserData,
    RightArrow: arrowRight,
    ChessBoardImage: ChessBoardImage,
    TextColor: "black",

    //DARKMODE
    DarkAccent: "#123df2",
    DarkGrey: "#f324",

    CurrentColor: "white",

    /*Chess Board Stats*/
    gameState: "",
    draggedPieceTargetId: "", // empty string means no piece is being dragged
    playerTurnToMoveIsWhite: true,
    whiteKingInCheck: false,
    blackKingInCheck: false,

    /*User Stats*/
    Benutzername: "Default",
    Elo: 666,
    PlayedGames: 11345,
    WonGames: 8199,
    LosGames: 3146,
    SinglePlayer: 7563,
    Multiplayer: 3782,
    TimeSpend: "2 Years",
  };

  handleSwitchBackground = () => {
    let { switchValue } = this.state;

    if (switchValue === true) {
      this.setState({
        switchValue,
        backgroundColor: "#121212",
        CurrentColor: "white",
        SwitchLogin: loginPictureWhite,
        SwitchRegister: registerPictureWhite,
        SwitchUser: userPictureWhite,
        SunMoon: "🌙",
        TextColor: "white",
      });
    } else if (switchValue === false) {
      this.setState({
        switchValue,
        backgroundColor: "white",
        CurrentColor: "white",
        SwitchLogin: loginPictureBlack,
        SwitchRegister: registerPictureBlack,
        SwitchUser: userPictureBlack,
        SunMoon: "☀️",
        TextColor: "black",
      });
    }
  };

  handleSlide = (type) => {
    let {
      active,
      xTabOne,
      xTabTwo,
      xTabThree,
      xTabFour,
      translateX,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
      translateXTabFour,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
    }).start();
    if (active === 1) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: width * 2,
          duration: 100,
        }).start(),
      ]);
    } else if (active === 2) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: -width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: width,
          duration: 100,
        }).start(),
      ]);
    } else if (active === 3) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width * 3,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: -width * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: -width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: 0,
          duration: 100,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: width * 2,
          duration: 100,
        }).start(),
        Animated.spring(translateXTabFour, {
          toValue: width * 3,
          duration: 100,
        }).start(),
      ]);
    }
  };

  render() {
    let {
      xTabOne,
      xTabTwo,
      xTabThree,
      xTabFour,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
      translateXTabFour,
      translateY,
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

        {/*Side Bar*/}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*Logo*/}
          <View style={({ flexDirection: "row" }, styles.Column)}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Homepage")}
            >
              <View style={styles.BaseShadow}>
                <View style={styles.TopBoxLogo}>
                  <View style={{}}>
                    <View
                      style={{
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={styles.CheduBlue}>Ch</Text>
                      <Text style={styles.CheduDarkBlue}>Edu</Text>
                    </View>
                    <Text
                      style={{ color: "#00578a", fontSize: windowWidth / 80 }}
                    >
                      Lern Chess!
                    </Text>
                  </View>
                  {<Image source={cheduLogo} style={styles.Logo} />}
                </View>

                <Text
                  style={{
                    fontSize: windowWidth / 30,
                    color: "white",
                  }}
                >
                  Learn to play Chess!
                </Text>
                <Text
                  style={{
                    fontSize: windowWidth / 50,
                    padding: 5,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  The most easiest and intuitive way to work your way up to get
                  better at chess!
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/*Statistic + Start Button*/}
          <View>
            {/*Statistics*/}
            <View style={({ flexDirection: "row" }, styles.Stats)}>
              <View style={styles.StatsShadow}>
                <View style={styles.TopBoxStats}>
                  <Text style={{ fontSize: windowWidth / 30, color: "black" }}>
                    Statistics
                  </Text>
                  <Image />
                </View>
                <View
                  style={{ flexDirection: "row", fontSize: windowWidth / 80 }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      width: windowWidth / 10,
                      height: windowHeight / 10,
                      textAlign: "right",
                    }}
                  >
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Benutzername:{" "}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Elo:{" "}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Played games:{" "}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Won games:{" "}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Lost games:{" "}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Singleplayer:{" "}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Multiplayer:{" "}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      Time Spend:{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      width: windowWidth / 10,
                      textAlign: "left",
                    }}
                  >
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.Benutzername}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.Elo}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.PlayedGames}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.WonGames}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.LosGames}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.SinglePlayer}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.Multiplayer}
                    </Text>
                    <Text
                      style={{ fontSize: windowWidth / 80, color: "white" }}
                    >
                      {this.state.TimeSpend}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/*Start Game Button */}

            <ImageBackground
              style={styles.StartGameButtonShadow}
              source={ChessBoardImage}
              resizeMode="cover"
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ChessBoard")}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: (windowWidth / 10) * 1,
                    height: (windowWidth / 10) * 1,
                  }}
                >
                  <Image
                    source={this.state.RightArrow}
                    style={{
                      width: (windowWidth / 10) * 1,
                      height: (windowWidth / 10) * 1,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.8)",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: windowWidth / 50,
                    color: "white",
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  Start Game!
                </Text>
              </View>
            </ImageBackground>
          </View>

          {/*Menu*/}
          <View>
            <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Login")}
                  style={{}}
                >
            <View
              style={
                ({ backgroundColor: this.state.CurrentColor },
                styles.MenuShadow)
              }
            >
              
            <Image
                source={this.state.SwitchLogin}
                style={{
                width: (windowWidth / 10) * 0.8,
                height: (windowWidth / 10) * 0.8,
                color: "white",
              }}
            />
              
            </View>
            <Text style = {{textAlign: 'center', fontWeight: 'bold', color: this.state.TextColor}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Register")}
                style={{}}
              >
              <View
                style={
                  ({ backgroundColor: this.state.CurrentColor },
                  styles.MenuShadow)
                }
              >
              
              <Image
                source={this.state.SwitchRegister}
                style={{
                  width: (windowWidth / 10) * 0.8,
                  height: (windowWidth / 10) * 0.8,
                  color: "white",
                }}
              />
              
              </View>
              <Text style = {{textAlign: 'center', fontWeight: 'bold', color: this.state.TextColor}}>Register</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("User")}
                style={{}}
              >
              <View
                style={
                  ({ backgroundColor: this.state.CurrentColor },
                  styles.MenuShadow)
                }
              >
              <Image
                source={this.state.SwitchUser}
                style={{
                  width: (windowWidth / 10) * 0.8,
                  height: (windowWidth / 10) * 0.8,
                  color: "white",
                }}
              />
              </View>
              <Text style = {{textAlign: 'center', fontWeight: 'bold', color: this.state.TextColor}}>Userprofil</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Content*/}
        <View style={{ flex: 1 }}>
          {/*Scroll Bar*/}
          <View
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 60,
                marginBottom: 20,
                height: 36,
                position: "relative",
                backgroundColor: this.state.CurrentColor,
              }}
            >
              <Animated.View
                style={{
                  position: "absolute",
                  width: "25%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "#007aff",
                  borderRadius: 4,
                  transform: [{ translateX }],
                }}
              />

              {/*Learn to play*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#007aff",
                  borderRadius: 4,
                  borderRightWidth: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onLayout={(event) =>
                  this.setState({ xTabOne: event.nativeEvent.layout.x })
                }
                onPress={() =>
                  this.setState({ active: 0 }, () => this.handleSlide(xTabOne))
                }
              >
                <Text style={{ color: active === 0 ? "#fff" : "#007aff" }}>
                  Learn to play
                </Text>
              </TouchableOpacity>

              {/*Online*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#007aff",

                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onLayout={(event) =>
                  this.setState({ xTabTwo: event.nativeEvent.layout.x })
                }
                onPress={() =>
                  this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))
                }
              >
                <Text style={{ color: active === 1 ? "#fff" : "#007aff" }}>
                  Online
                </Text>
              </TouchableOpacity>

              {/*Chessboard*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#007aff",

                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onLayout={(event) =>
                  this.setState({ xTabThree: event.nativeEvent.layout.x })
                }
                onPress={() =>
                  this.setState({ active: 2 }, () =>
                    this.handleSlide(xTabThree)
                  )
                }
              >
                <Text style={{ color: active === 2 ? "#fff" : "#007aff" }}>
                  ChessBoard
                </Text>
              </TouchableOpacity>

              {/*Online*/}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#007aff",
                  borderRadius: 4,
                  borderLeftWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onLayout={(event) =>
                  this.setState({ xTabFour: event.nativeEvent.layout.x })
                }
                onPress={() =>
                  this.setState({ active: 3 }, () => this.handleSlide(xTabFour))
                }
              >
                <Text style={{ color: active === 3 ? "#fff" : "#007aff" }}>
                  Analysis
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*Single Slides*/}
          <ScrollView>
            {/*Learn to play*/}
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [{ translateX: translateXTabOne }],
              }}
              onLayout={(event) =>
                this.setState({ translateY: event.nativeEvent.layout.height })
              }
            >
              <Text>d</Text>
              <Text>d</Text>
              <View style={{ marginTop: 20 }}>
                <Image
                  source={twokings}
                  style={{ width: 30, height: 30, borderRadius: 15 }}
                />
              </View>
            </Animated.View>

            {/*Online*/}
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                //Transform, damit die Position von oben koriigiert wird hier eben -translateY
                transform: [
                  {
                    translateX: translateXTabTwo,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}
            >
              <Text>Tab Two</Text>
              <View style={{ marginTop: 20 }}>
                <Image
                  source={twokings}
                  style={{ width: 30, height: 30, borderRadius: 15 }}
                />
              </View>
            </Animated.View>

            {/*Chessboard*/}
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                //TODO: Transform
                transform: [
                  {
                    translateX: translateXTabThree,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}
            ></Animated.View>

            {/*Analysis*/}
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                //Transform TODO
                transform: [
                  {
                    translateX: translateXTabFour,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}
            >
              <Text>Tab Four</Text>
              <View style={{ marginTop: 20 }}>
                <Image
                  source={twokings}
                  style={{ width: 30, height: 30, borderRadius: 15 }}
                />
              </View>
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TopBoxLogo: {
    width: (windowWidth / 10) * 3,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  TopBoxStats: {
    width: (windowWidth / 10) * 2.8,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },

  Topbar: {
    marginBottom: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: windowHeight / 14,
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

  //Homepage Styles

  Stats: {
    justifyContent: "center",
    alignItems: "center",
  },

  Column: {
    justifyContent: "center",
    alignItems: "center",
  },

  Box: {
    justifyContent: "center",
  },

  Logo: {
    width: windowWidth / 8,
    height: windowWidth / 8,
  },

  TwoKings: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },

  CheduBlue: {
    margin: 0,
    padding: 0,
    color: "#00578a",
    fontSize: windowWidth / 20,
    fontWeight: "bold",
  },
  CheduDarkBlue: {
    padding: 0,
    margin: 0,
    color: "#0e113f",
    fontSize: windowWidth / 20,
    fontWeight: "bold",
  },

  BaseShadow: {
    overflow: "hidden",
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 3,
    height: (windowWidth / 10) * 3,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#328da8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },

  StatsShadow: {
    overflow: "hidden",
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 2.8,
    height: (windowWidth / 10) * 1.8,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#00578a",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },

  StartGameButtonShadow: {
    flexDirection: "row",
    overflow: "hidden",
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 2.8,
    height: (windowWidth / 10) * 1,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },
  MenuShadow: {
    flexDirection: "row",
    overflow: "hidden",
    margin: (windowWidth / 10) * 0.1,
    width: (windowWidth / 10) * 0.85,
    height: (windowWidth / 10) * 0.85,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
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
