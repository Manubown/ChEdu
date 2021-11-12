import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native"; //components

import cheduLogo from "../Pictures/Logo.png";


import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;

const Homepage = ({ navigation }) => {
  return (
    //Text, images, etc.

    <View style={styles.Mainview}>
      <View>
        <View style={styles.Column}>
          <Text style={styles.Title}>
            <Text style={styles.CheduBlue}>Ch</Text>
            <Text style={styles.CheduDarkBlue}>Edu</Text>
          </Text>
          <Image source={cheduLogo} style={styles.Logo} />
        </View>
        <View style={styles.Row}>
          <View style={styles.BaseShadow}>
            <Button
              onPress={() => {
                navigation.navigate("Profile"); //Profile
              }}
              title="Profile"
            />
          </View>
          <View style={styles.BaseShadow}>
            <Button
              onPress={() => {
                navigation.navigate("Game"); //Game
              }}
              title="Start Game"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Mainview: {
    flexGrow: 1,
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

  Column: {
    flexDirection: "column",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  Row: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
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
  Logo: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default Homepage;
