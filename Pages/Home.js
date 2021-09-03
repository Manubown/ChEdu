import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) =>{
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{flex:1,justifyContent: "center", alignItems: "center" }}>
                    <View style={ styles.BaseShadow}>
                    <Text style = {styles.Title}>
                        <Text style = {styles.CheduBlue}>Ch</Text>
                        <Text style = {styles.CheduDarkBlue}>Edu</Text>
                    </Text>
                    <Text>
                        Learn how to play chess!
                    </Text>
                    </View>
                    <View style={styles.BaseShadow}>
                        <Text>Welcome to our Diplomproject</Text>
                    </View>
                </View>
                
                <View style = {styles.BottonVield}>
                    <Button style={styles.ButtonStyle}
                        onPress={() => {
                            navigation.navigate('Intro');
                        }}
                        title="Start now!"
                        />
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
    margin:20,
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

  export default Home;