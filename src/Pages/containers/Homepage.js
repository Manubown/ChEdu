import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native"; //components

import cheduLogo from "../Pictures/Logo.png";
import twokings from "../Pictures/two_kings.jpg"


import { Dimensions } from "react-native";
import Table, { Column } from "rc-table";
import { bgYellowBright } from "chalk";
import { Content } from "antd/lib/layout/layout";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const x = 100;
const y = 200;



const Homepage = ({ navigation }) => {
  return (
        <View style = {windowWidth,windowHeight}>
          <View style={{ flexDirection: "row"}, styles.Column}>
            <View style={styles.BaseShadow}>
              <Text style={styles.Title}>
                <Text style={styles.CheduBlue}>Ch</Text>
                <Text style={styles.CheduDarkBlue}>Edu</Text>
              </Text>
              {<Image source={cheduLogo} style={styles.Logo} />}
            </View>
          </View>

          <View style={styles.Column}>
            <View style={styles.BaseShadow}>
                <Text>Want to learn chess or improve at the game?</Text>
                <Text> </Text>
                <Text>ChEdu is your change to master it!</Text>
            </View>

            <View style={styles.BaseShadow}>
              <View style={styles.Box}>
                <Button style={styles.ButtonStyle}
                          onPress={() => {
                              navigation.navigate('Intro');
                          }}
                          title="Introduction"
                          />
                
              </View>
              <Text>Learn chess at any level of expirience and any age of life!</Text>
            </View>
            
            <View style={styles.BaseShadow}>
              <View style={styles.Box}>
                <Button style={styles.ButtonStyle}
                            onPress={() => {
                                navigation.navigate('Intro');
                            }}
                            title="Training"
                            />
              </View>
            </View>
            
            <View style={styles.BaseShadow}>
              <View style={styles.Box}>
              <Button style={styles.ButtonStyle}
                            onPress={() => {
                                navigation.navigate('Intro');
                            }}
                            title="Engine Practice"
                            />
              </View>
            </View>

            <View style={styles.BaseShadow}>
              <View style={styles.Box}>
                <Button style={styles.ButtonStyle}
                              onPress={() => {
                                  navigation.navigate('Intro');
                              }}
                              title="Chessboard (1v1)"
                              />
              </View>
              <Text> </Text>
              {<Image source={twokings} style={styles.TwoKings} />}
            </View>

            <View style={styles.BaseShadow}>
              <View style={styles.Box}>
                <Button style={styles.ButtonStyle}
                              onPress={() => {
                                  navigation.navigate('Intro');
                              }}
                              title="Online"
                              />
              </View>
            </View>

            <View style={styles.BaseShadow}>
              <View style={styles.Box}>
                <Button style={styles.ButtonStyle}
                              onPress={() => {
                                  navigation.navigate('Intro');
                              }}
                              title="Statistics"
                              />
              </View>
            </View>
          </View>
        </View>
  );
};


const styles = StyleSheet.create({
    Column: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center", 
  },

  Box: {
    justifyContent: "center",
  },
  
  Logo: {
    width: 50,
    height: 50,
  },

  TwoKings: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },

  CheduBlue: {
    color: "#00578a",
    fontSize: 40
  },
  CheduDarkBlue: {
    color: "#0e113f",
    fontSize: 40
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

export default Homepage;
