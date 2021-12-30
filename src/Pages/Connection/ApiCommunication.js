import React from "react";
import { UserData } from "../../User/UserData";

import axios from "axios";
import bcrypt from "bcryptjs";

import { deleteData, getData, storeData } from "../../Scripts/SaveData";

//////// REQUEST REGISTER ////////
export const RequestRegister = (username, password, email) => {
  //TODO: API Request
  console.log("Register POST Request Test: " + username, password, email);
  console.log(bcrypt.hashSync(password));
  var postRequest = {
    PlayerName: username,
    Emaiil: email,
    HashedPassword: bcrypt.hashSync(password),
  };
<<<<<<< Updated upstream
  axios
    .post("https://chedu.at:5000/register", postRequest)
    .then(function (response) {
      if (response) {
        console.log("Login request Sent! \n Post request sent! " + postRequest);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const RequestLogin = (username, password) => {
=======
  console.log(
    postRequest.PlayerName + postRequest.Email + postRequest.HashedPassword
  );
  try {
    const response = axios
      .post("https://chedu.at:5000/register", postRequest)
      .then(function (response) {
        if (response) {
          console.log(
            "Register request Sent! \n Post request sent! " +
              postRequest.username +
              postRequest.email
          );
          storeData(DemoUserData);

          this.props.navigation.navigate("Homepage");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

//////// REQUEST LOGIN ////////
export const RequestLogin = async (username, password) => {
>>>>>>> Stashed changes
  console.log("Login POST Request Test: " + username, password);
  var postRequest = {
    PlayerName: username,
    HashedPassword: bcrypt.hashSync(password),
  };
<<<<<<< Updated upstream
  axios
    .post("https://chedu.at:5000/VerifyPlayer", postRequest)
    .then(function (response) {
      if (response) {
        console.log("Login request Sent! \n Post request sent! " + postRequest);
        if (response) {
          UserData.username = username;
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
=======
  console.log(postRequest.PlayerName + postRequest.HashedPassword);
  try {
    const response = await axios
      .post("https://chedu.at:5000/VerifyPlayer", postRequest)
      .then(function (response) {
        console.log(response.data);

        //Benutzername,Elo,PlayedGames, WonGames, LosGames, SinglePlayer, Multiplayer, TimeSpend
        //setUserData
        console.log("Data store: " + DemoUserData);
        storeData(DemoUserData);
        return true;
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  } catch (error) {
    console.log(error);
  }
>>>>>>> Stashed changes
};

//////// TEST SAVE DATA ////////
export const SaveDataTest = () => {
  deleteData(DemoUserData);
  //storeData(DemoUserData);
};

//////// DEMO USER ////////
const DemoUserData = {
  Benutzername: "Manubown",
  Elo: 66,
  PlayedGames: 12903,
  WonGames: 12000,
  LostGames: 9,
  SinglePlayer: 2800,
  Multiplayer: 10000,
  TimeSpend: 387575,
  isLoggedIn: true,
};
