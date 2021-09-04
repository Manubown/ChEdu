import React from 'react';
import { StyleSheet, Text, View, Button, ViewPropTypes, Alert } from 'react-native';

const Intro = () =>{
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{flex:1,justifyContent: "center", alignItems: "center" }}>
                    <View style={ styles.BaseShadow}>
                    <Text style = {styles.Title}>
                        Intro Sequence!
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.BaseShadow}>
                            <Button onPress={() => {
                                alert('Beginner Pressed!')
                            }} title ='Beginner'/>
                        </View>
                        <View style={styles.BaseShadow}>
                            <Button onPress={() => {
                                alert('Experiente Pressed!')
                            }}
                            title='Experiente' />
                        </View>
                        
                        
                    </View>
                        <Text>
                            Learn how to play chess!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    Title: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    CheduBlue:{
      color: '#00578a'
    },
    CheduDarkBlue:{
      color: '#0e113f'
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
        margin:15,
      padding:10,
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
  }
);

export default Intro;