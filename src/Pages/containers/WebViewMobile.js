import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { WebView } from "react-native-webview";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;

const WebViewMobile = ({ navigation }) => {
  return <WebView source={{ uri: "https://chedu.at/" }} />;
};

const styles = StyleSheet.create({});

export default WebViewMobile;
