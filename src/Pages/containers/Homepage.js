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
} from "react-native"; //components

import { AppearanceProvider } from "react-native-appearance";

import { Chessboard } from "react-chessboard";

import cheduLogo from "../Pictures/Logo.png";
import twokings from "../Pictures/two_kings.jpg";
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
      ]);
      Animated.spring(translateXTabFour, {
        toValue: width * 2,
        duration: 100,
      }).start();
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
                  borderRadius: 4,
                  borderLeftWidth: 0,
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
                  borderRadius: 4,
                  borderLeftWidth: 0,
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
                  Chessboard
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
            >
              <View style={{ flexGrow: 1 }}>
                <View
                  style={{
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {/*Chessboard*/}
                  </View>
                </View>
              </View>
            </Animated.View>

            {/*Online*/}
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
    flexDirection: "row"
  },

  LoginStyle: {
    left: 0,
    flexDirection: "row"
  },

  RegisterStyle:{
    left: (windowWidth/4),
    flexDirection: "row"
  },

  UserStyle:{
    position: "absolute",
    right: (windowWidth/4),
    flexDirection: "row"
  },

  //Homepage Styles
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
