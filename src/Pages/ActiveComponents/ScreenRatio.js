import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native"; //components
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ScreenPopUp = () => {
  return (
    <View style={styles.MainBlock}>
      <Text style={styles.MiddleText}>
        Rotate your Device Vertical or Scale the Window width <br /> Then
        refresh the page
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainBlock: {
    position: "absolute",
    height: windowHeight,
    width: windowWidth,

    backgroundColor: "black",
    opacity: 0.6,
    zIndex: 9999,
  },
  MiddleText: {
    position: "absolute",
    top: windowHeight / 2,
    width: windowWidth,
    textAlign: "center",
    color: "white",
    fontSize: windowWidth / 50,
  },
  ButtonStyle: {
    position: "absolute",
    top: windowHeight / 2,
    width: windowWidth / 8,
    justifyContent: "center",
    backgroundColor: "white",
    fontSize: windowWidth / 50,
  },
});
