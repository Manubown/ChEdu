import React from "react";
import { UserData } from "../../User/UserData";

import axios from "axios";
import bcrypt from "bcryptjs";

import { storeData, deleteData } from "../../Scripts/SaveData";

export const RequestRegister = (username, password, email) => {
  console.log("Register POST Request Test: " + username, password, email);

  var postRequest = {
    PlayerName: username,
    Email: email,
    HashedPassword: password,
  };
  console.log(
    postRequest.PlayerName + postRequest.Email + postRequest.HashedPassword
  );
  try {
    const response = axios
      .post("https://chedu.at:5000/register", postRequest)
      .then(function (response) {
        if (response) {
          console.log(
            "Login request Sent! \n Post request sent! " +
              postRequest.username +
              postRequest.email
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const RequestLogin = async (username, password) => {
  console.log("Login POST Request Test: " + username, password);

  var postRequest = {
    Email: username,
    HashedPassword: password,
  };
  console.log(postRequest.PlayerName + postRequest.HashedPassword);
  try {
    const response = await axios
      .post("https://chedu.at:5000/VerifyPlayer", postRequest)
      .then(function (response) {
        console.log(response.data);
        if (storeData(response.data, username)) {
          return true;
        } else {
          return false;
        }
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  } catch (error) {
    console.log(error);
  }
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
