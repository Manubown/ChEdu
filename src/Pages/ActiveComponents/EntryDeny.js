import React, { Component, useImperativeHandle, forwardRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Modal,
  Pressable,
} from "react-native"; //components
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const EntryDeny = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.PopUpVisible}
      onRequestClose={() => {
        props.PopUpVisible = !props.PopUpVisible;
      }}
    >
      <View style={styles.window}>
        <View style={styles.TopBar}>
          <Text style={styles.Title}>Alpha Version!</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Hey we are currently in Alpha.
            <br />
            This side is most likely under development and you can't visite what
            you wanted to click!
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.PressableButton}
        onPress={() => {
          props.PopUpVisible = !props.PopUpVisible;
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: windowWidth / 60,
          }}
        >
          Close
        </Text>
      </Pressable>
    </Modal>
  );
};

const getIndex = () => {
  return 2;
};

const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: "#00578a",
  },
  Title: {
    padding: 20,
    fontSize: windowWidth / 40,
    color: "white",
  },

  window: {
    overflow: "hidden",
    borderRadius: 20,
    zIndex: 10000,
    position: "absolute",
    marginTop: windowHeight / 4,
    marginLeft: windowWidth / 5,
    marginRight: windowWidth / 5,
    width: (windowWidth / 5) * 3,
    height: (windowHeight / 7) * 3,
    backgroundColor: "white",
    textAlign: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },
  PressableButton: {
    alignContent: "center",
    backgroundColor: "#328da8",
    top: (windowHeight / 17) * 12,

    left: (windowWidth / 20) * 9,
    width: windowWidth / 10,
    zIndex: 9999999,
    borderRadius: 20,
  },
  text: {
    fontSize: windowWidth / 60,
    textAlign: "center",
    padding: 15,
  },
});
