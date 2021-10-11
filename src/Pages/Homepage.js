import React from "react";
import { StyleSheet, Text, View, Button } from "react-native"; //components

import { SettingVariables } from "../Scripts/SettingVariables";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;

const Homepage = ({ navigation }) => {
  return (//Text, images, etc.
    <View style={{ flexGrow: 1 }}> 
    <Text style={styles.red}>Hallo</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});

export default Homepage;
