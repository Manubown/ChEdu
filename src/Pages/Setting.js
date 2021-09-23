import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {SettingVariables} from '../Scripts/SettingVariables';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const x = 100;
const y = 200;



const Setting = ({navigation}) =>{
    return (
        <View style={{flexGrow:1}}>
                <View style={{justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection:'row-reverse'}}>
                      <View style={styles.buttonView}>
                        <View style={styles.Buttons}>
                          <Button style={styles.Buttons} 
                            onPress={() => {
                            navigation.navigate('Home');
                          }}
                          title="EXIT"/>
                        </View>
                        <View style={styles.Buttons}><Button title="SETTINGS"/></View>
                        <View style={styles.Buttons}><Button title="SAVE"/></View>
                      </View>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Title: {
      fontWeight: 'bold',
      fontSize: 80,
    },

    Buttons:{
      margin:15,
      width:150,
    },

    buttonView:{
      flex:1, 
      flexDirection:'column', 
      alignContent:"center", 
      justifyContent:"center", 
      height:(windowHeight/10)*8,
      margin:30,
      padding:20,
    },
    CheduBlue:{
      color: '#00578a'
    },
    PlayLog:{
      flex:1, 
      height:(windowHeight/10)*8,
      width:80,
      backgroundColor: 'white',
      borderRadius: 20,
      alignSelf:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      justifyContent: "center", 
      alignItems: "center" 
    },
    CheduDarkBlue:{
      color: '#0e113f'
    },
    ChessBoard:{
       
      height:(windowHeight/10)*8.5,
      width:(windowHeight/10)*8.5,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      alignSelf:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      justifyContent: "center", 
      alignItems: "center" 
    },
  
    BottonVield:{
      height:100,
      width:100,
      marginBottom: 80,
      backgroundColor: 'white',
      borderRadius: 90,
      alignSelf:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      justifyContent: "center", 
      alignItems: "center" 
    },
  
    BaseShadow:{
      padding:20,
      borderRadius: 20,
      backgroundColor: 'white',
      alignItems:"center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
  
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    }
  });

  export default Setting;