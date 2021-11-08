import { SCOPABLE_TYPES } from "@babel/types";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

//WebRequest
import axios from "axios";
import bcrypt from "bcryptjs";

import { Dimensions } from "react-native";
import cheduLogo from "../Pictures/Logo.png";
import cheduQrCode from "../Pictures/CheduQR.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//SetUp Links:
// https://aureliomerenda.medium.com/create-a-native-web-app-with-react-native-web-419acac86b82
// https://stackoverflow.com/questions/55235825/error-failed-to-build-ios-project-we-ran-xcodebuild-command-but-it-exited-wit

const Home = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState(null);
  return (
    <View style={styles.Container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.topSize}></View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.BaseShadow}>
            <Text style={styles.Title}>
              <Text style={styles.CheduBlue}>Ch</Text>
              <Text style={styles.CheduDarkBlue}>Edu</Text>
            </Text>
            <Text>Learn how to play chess!</Text>
          </View>
          {/*<Image source={cheduLogo} style={styles.Logo} />*/}
        </View>

        <View style={styles.BaseShadow}>
          <Text>
            Welcome to our Diploma Project, we are currently in development!
          </Text>
        </View>
        <View style={styles.BaseShadow}>
          <Text>Thank you for visiting our website!</Text>
        </View>
        {/* Email Input */}
        <View style={styles.InputField}>
          <Text style={styles.h2Title}>Updates and Progress</Text>
          <Text style={styles.EmailText}>
            Do you want to get updates how we progress? Insert your E-mail down
            below:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
            />
            <Button
              style={styles.Button}
              onPress={() => {
                componentDidMount(email); //email Submit
              }}
              title="Submit"
            />
          </View>
        </View>
        <View style={styles.triangleCorner} />
        {/* Jahres Verlauf */}
        <Text style={styles.YearTitle}>Our Progress:</Text>

        <View>
          <View style={styles.SprintViewBox}>
            <Text style={styles.YearHeader}>1 Juni - 11 September</Text>
            <Text style={styles.YearTextField}>
              Main React Native setup {"\n"}
              Server {"\n"}
              Domain DNS setup{"\n"}
              TypeScript first research
            </Text>
          </View>
          <View style={styles.SprintViewBox}>
            <Text style={styles.YearHeader}>1 October - 30. October</Text>
            <Text style={styles.YearTextField}>
              React Native: {"\n"}~ Basic UI {"\n"}~ Basic Chess Board {"\n"}
              {"\n"}Server: {"\n"}~ Basic Data Base {"\n"}~ Basic E-mail Client{" "}
              {"\n"}~ Basic Chess API
            </Text>
          </View>
        </View>
        <Image source={cheduQrCode} style={styles.Logo} />
        <View style={styles.topSize}></View>
      </View>
    </View>
  );
};
/*
<View style={{flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
                  <View style = {styles.BottonVield}>
                      <Button style={styles.ButtonStyle}
                          onPress={() => {
                              navigation.navigate('MainView');//MainView
                          }}
                          title="Start now!"
                          />
                  </View>
                  <View style = {styles.BottonVield}>
                    <Button style={styles.ButtonStyle}
                        onPress={() => {
                            navigation.navigate('Setting');//Setting
                        }}
                        title="Settings"
                        />
                  </View>
                  <View style = {styles.BottonVield}>
                    <Button style={styles.ButtonStyle}
                        onPress={() => {
                            navigation.navigate('Login');//Login
                        }}
                        title="Login"
                        />
                  </View>
                </View>
*/

const componentDidMount = (emailText) => {
  // Simple POST request with a JSON body using axios
  const postRequest = { Email: emailText };
  axios
    .post("https://chedu.at:5000/NewDemoUser", postRequest)
    .then(function (response) {
      console.log("Email Sent! \n Post request sent! " + emailText);
    })
    .catch(function (error) {
      console.log(error);
    });
};

(calculateView) => {};

const styles = StyleSheet.create({
  topSize: {
    height: windowHeight / 10,
  },

  triangleCorner: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 0,
    height: 200,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: Dimensions.get("window").width,
    borderRightWidth: windowHeight / 0.8,
    borderBottomWidth: windowHeight / 1,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#0e113f",
    zIndex: -100,
  },

  YearTitle: {
    marginTop: 60,
    margin: 10,
    fontSize: 40,
    fontWeight: "bold",
    color: "#00578a",
  },

  YearHeader: {
    textAlign: "left",
    fontSize: 30,
    margin: 10,
  },

  YearTextField: {
    fontSize: 15,
    margin: 10,
  },

  SprintViewBox: {
    margin: 10,
    padding: 20,
    width: windowWidth - 100,
    borderRadius: 50,
    backgroundColor: "white",
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

  Logo: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    margin: 10,
    borderRadius: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  h2Title: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 10,
  },
  EmailText: {
    fontSize: 15,
    margin: 10,
  },

  Button: {
    width: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

  Container: {
    flexGrow: 1,
    //flexDirection: 'row',
  },
  Horizontal: {
    flexDirection: "row",
  },

  Title: {
    fontWeight: "bold",
    fontSize: 100,
  },
  CheduBlue: {
    color: "#00578a",
  },
  CheduDarkBlue: {
    color: "#0e113f",
  },

  InputField: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
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

  BottonVield: {
    height: 50,
    width: 200,
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
    shadowRadius: 5,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  BaseShadow: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
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
});
export default Home;
