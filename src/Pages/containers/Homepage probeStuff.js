import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native"; //components

import cheduLogo from "../Pictures/Logo.png";
import twokings from "../Pictures/two_kings.jpg";

import { Dimensions } from "react-native";
import { grey } from "chalk";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;

const Homepage = ({ navigation }) => {
  return (
    <View>
      <View>Droner VIew</View>
      <View style={styles.mainView}>
        <View style={styles.TopButton}>
          <Button
            style={styles.ButtonsStyleTop}
            onPress={() => {
              navigation.navigate("Intro");
            }}
            title="Profile"
          />
          <Button
            style={styles.ButtonsStyleTop}
            onPress={() => {
              navigation.navigate("Intro");
            }}
            title="Settings"
          />
        </View>
        <View style={styles.Column}>
          <View style={styles.TopBar}>
            <View style={styles.Row}>
              <Text style={styles.Title}>
                <Text style={styles.CheduBlue}>Ch</Text>
                <Text style={styles.CheduDarkBlue}>Edu</Text>
              </Text>
              {<Image source={cheduLogo} style={styles.Logo} />}
            </View>
          </View>
        </View>
        <View>
          <View style={styles.BaseShadow}>
            <Text>Want to learn chess or improve at the game?</Text>
            <Text> </Text>
            <Text>ChEdu is your chance to master it!</Text>
          </View>

          <View style={styles.BaseShadow}>
            <View style={styles.Box}>
              <Button
                style={styles.ButtonStyle}
                onPress={() => {
                  navigation.navigate("Intro");
                }}
                title="Introduction"
              />
            </View>
            <Text>
              Learn chess at any level of expirience and any age of life!
            </Text>
          </View>

          <View style={styles.BaseShadow}>
            <View style={styles.Box}>
              <Button
                style={styles.ButtonStyle}
                onPress={() => {
                  navigation.navigate("Intro");
                }}
                title="Training"
              />
            </View>
          </View>

          <View style={styles.BaseShadow}>
            <View style={styles.Box}>
              <Button
                style={styles.ButtonStyle}
                onPress={() => {
                  navigation.navigate("Intro");
                }}
                title="Engine Practice"
              />
            </View>
          </View>

          <View style={styles.BaseShadow}>
            <View style={styles.Box}>
              <Button
                style={styles.ButtonStyle}
                onPress={() => {
                  navigation.navigate("Intro");
                }}
                title="Chessboard (1v1)"
              />
            </View>
            <Text> </Text>
            {<Image source={twokings} style={styles.TwoKings} />}
          </View>

          <View style={styles.BaseShadow}>
            <View style={styles.Box}>
              <Button
                style={styles.ButtonStyle}
                onPress={() => {
                  navigation.navigate("Intro");
                }}
                title="Online"
              />
            </View>
          </View>

          <View style={styles.BaseShadow}>
            <View style={styles.Box}>
              <Button
                style={styles.ButtonStyle}
                onPress={() => {
                  navigation.navigate("Intro");
                }}
                title="Statistics"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Styling
  Row: {
    flexDirection: "row",
  },

  mainView: {
    paddingTop: windowWidth / 10,
    paddingLeft: windowWidth / 5,
    paddingRight: windowWidth / 5,
  },

  TopBar: {
    alignItems: "center",
  },

  ButtonsStyleTop: {
    width: 100,
    height: 20,
  },

  //ChEdu
  Title: {
    fontWeight: "bold",
    fontSize: 80,
    margin: 10,
  },

  TopButton: {
    flexDirection: "row-reverse",
  },

  //COLORS
  CheduBlue: {
    color: "#00578a",
  },
  CheduDarkBlue: {
    color: "#0e113f",
  },

  //Images
  Logo: {
    margin: 10,
    width: 100,
    height: 100,
  },

  TwoKings: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },

  //BaseShadowBox
  BaseShadow: {
    backgroundColor: "black",
    margin: 20,
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

export default Homepage;
