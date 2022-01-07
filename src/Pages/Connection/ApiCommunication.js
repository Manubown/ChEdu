import React from "react";
import { UserData } from "../../User/UserData";

import axios from "axios";
import bcrypt from "bcryptjs";

import { deleteData, getData, storeData } from "../../Scripts/SaveData";

//////// REQUEST REGISTER ////////
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

/* 
{
  "Offline":
  {
    "_OfflineID":4,
    "OverallPoints":1000,
    "WonWhite":0,
    "WonBlack":0,
    "LostWhite":0,
    "LostBlack":0,
    "Games":"
  "},
  "Online":
  {
    "_OnlineID":4,
    "OverallPoints":1000,
    "WonWhite":0,
    "WonBlack":0,
    "LostWhite":0,
    "LostBlack":0,
    "Games":" "
  }
} */

const LoginUser = (Userdata) => {
  /*
  console.log(
    "Login use: " + UserData.Online.WonWhite + "," + UserData.Online.LosWhite
  );
  var WonGames =
    parseInt(Userdata.Online.WonWhite) + parseInt(UserData.Online.WonBlack);
  var LosGames =
    parseInt(UserData.Online.LosWhite) + parseInt(UserData.Online.LosBlack);
    */
  console.log("Login User: " + Userdata);
  return (
    ",Elo:" + 100 + ",WonGames:" + 20 + ",LosGames:" + 2 + ", PlayedGames:" + 22
  );
};

//////// REQUEST LOGIN ////////
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
        response = response.data;
        //Benutzername,Elo,PlayedGames, WonGames, LosGames, SinglePlayer, Multiplayer, TimeSpend
        //setUserData
        console.log("Login request user Data: " + response);

        storeData("Benutzername:" + username + LoginUser(response));

        return true;
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
  deleteData();
  //storeData();
};
