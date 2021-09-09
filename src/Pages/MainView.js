import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MainView = () =>{
    return (
        <View style={{flex:1}}>

                <View style={{flex:1,justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.BaseShadow}><Text>Welcome to your chessboard</Text></View>
                    <View style={{flexDirection:'row'}}>
                      <View style={styles.ChessBoard}><Text>Test</Text></View>
                      <View style = {styles.PlayLog}><Text>Play Log</Text></View>
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
    CheduBlue:{
      color: '#00578a'
    },
    PlayLog:{
      height:250,
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
      height:250,
      width:250,
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

  export default MainView;