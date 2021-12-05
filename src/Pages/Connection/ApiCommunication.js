import React from "react";
import { UserData } from "../../User/UserData";

import axios from "axios";
import bcrypt from "bcryptjs";

export const RequestRegister = (username, password, email) => {
  //TODO: API Request
  console.log("Register POST Request Test: " + username, password, email);
  console.log(bcrypt.hashSync(password));
  var postRequest = {
    PlayerName: username,
    Emaiil: email,
    HashedPassword: bcrypt.hashSync(password),
  };
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
  console.log("Login POST Request Test: " + username, password);
  var postRequest = {
    PlayerName: username,
    HashedPassword: bcrypt.hashSync(password),
  };
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
};
