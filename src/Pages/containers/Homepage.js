import React from "react";
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
} from "react-native"; //components

import { Chessboard } from "react-chessboard";

import cheduLogo from "../Pictures/Logo.png";
import twokings from "../Pictures/two_kings.jpg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width } = Dimensions.get("window");

const x = 100;
const y = 200;

//TODO create a Hyperlink to Login => ask Manuel
/*const Home = ({ navigation }) => {
  return new Homepage();
}*/

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
    } = this.state;
    return (
      <View style={(windowWidth, windowHeight)}>
        <View style={({ flexDirection: "row" }, styles.Column)}>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate("Login")}
          />

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
              Learn playing chess!
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
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

          <ScrollView>
            <Animated.View
              style={{
                //Learn to play
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

            <Animated.View
              style={{
                //Online
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

            <Animated.View
              style={{
                //Chessboard
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
                    <View style={styles.ChessBoard}>
                      <Chessboard id="BasicBoard" />
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>

            <Animated.View
              style={{
                //Online
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
  //Homepage styles
  Column: {
    justifyContent: "center",
    flex: 1,
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
    margin: 50,
    width: windowWidth / 2,
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
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
