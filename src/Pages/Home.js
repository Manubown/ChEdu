import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//SetUp Links:
// https://aureliomerenda.medium.com/create-a-native-web-app-with-react-native-web-419acac86b82
// https://stackoverflow.com/questions/55235825/error-failed-to-build-ios-project-we-ran-xcodebuild-command-but-it-exited-wit

const Home = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.BaseShadow}>
          <Text style={styles.Title}>
            <Text style={styles.CheduBlue}>Ch</Text>
            <Text style={styles.CheduDarkBlue}>Edu</Text>
          </Text>
          <Text>Learn how to play chess!</Text>
        </View>
        <View style={styles.BaseShadow}>
          <Text>
            Welcome to our Diploma Project, we are currently in development!
          </Text>
        </View>
        <View style={styles.BaseShadow}>
          <Text>Thank you for visiting our Site!</Text>
        </View>
        <Button
          onPress={() => {
            navigation.navigate("Register"); //MainView
          }}
          title="Start now!"
        />
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

(calculateView) => {};

const styles = StyleSheet.create({
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
