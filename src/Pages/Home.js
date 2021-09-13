import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//SetUp Links:
// https://aureliomerenda.medium.com/create-a-native-web-app-with-react-native-web-419acac86b82
// https://stackoverflow.com/questions/55235825/error-failed-to-build-ios-project-we-ran-xcodebuild-command-but-it-exited-wit

const Home = ({ navigation }) =>{
    return (
        <View style={styles.Container}>
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
                            navigation.navigate('MainView');
                        }}
                        title="Start now!"
                        />
                </View>
        </View>
    );
}

calculateView => {
    
}

const styles = StyleSheet.create({
    Container: {
      flexGrow:1,
    },
    Horizontal: {
        flexDirection: 'row'
    },

      Title: {
        fontWeight: 'bold',
        fontSize: 100,
        
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
        margin: 10,
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