import { black } from "chalk";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

import { Dimensions } from "react-native";

import blankProfile from "../Pictures/blank-profile.png";
import MichaelDorner from "../Pictures/Michael_5EHIF.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;

const AboutUs = ({ navigation }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={styles.MainRow}>
        <Text style={styles.TitleText}>About Us</Text>
        <View style={styles.PersonBox}>
          <View style={styles.TopProfileField}>
            <Image source={MichaelDorner} style={styles.Profile} />
            <Text style={styles.PersonName}>Michael Dorner</Text>
            <View style={styles.ProfileTextBox}>
              <Text style={styles.ProfileText}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.PersonBox}>
          <View style={styles.TopProfileField}>
            <Image source={blankProfile} style={styles.Profile} />
            <Text style={styles.PersonName}>Manuel Gut</Text>
            <View style={styles.ProfileTextBox}>
              <Text style={styles.ProfileText}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.PersonBox}>
          <View style={styles.TopProfileField}>
            <Image source={blankProfile} style={styles.Profile} />
            <Text style={styles.PersonName}>Filip Josipovic</Text>
            <View style={styles.ProfileTextBox}>
              <Text style={styles.ProfileText}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.PersonBox}>
          <View style={styles.TopProfileField}>
            <Image source={blankProfile} style={styles.Profile} />
            <Text style={styles.PersonName}>Kerim Arslan</Text>
            <View style={styles.ProfileTextBox}>
              <Text style={styles.ProfileText}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainRow: {
    flexDirection: "row",
  },

  TitleText: {
    textAlign: "center",
    fontSize: 30,
  },

  PersonBox: {
    marginTop: 80,
    margin: 10,
    width: (windowWidth - 80) / 4,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },

  PersonName: {
    fontSize: 25,
    margin: 5,
    textAlign: "center",
  },

  Profile: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },

  TopProfileField: {
    top: -60,
    alignItems: "center",
  },

  ProfileTextBox: {
    padding: 20,
  },

  ProfileText: {
    fontSize: 15,
  },
});

export default AboutUs;
