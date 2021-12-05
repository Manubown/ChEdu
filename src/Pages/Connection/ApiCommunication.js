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
    Email: email,
    HashedPassword: bcrypt.hashSync(password),
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

export const RequestLogin = (username, password) => {
  console.log("Login POST Request Test: " + username, password);
  var postRequest = {
    PlayerName: username,
    HashedPassword: bcrypt.hashSync(password),
  };
  console.log(postRequest.PlayerName + postRequest.HashedPassword);
  try {
    const response = axios
      .get("https://chedu.at:5000/VerifyPlayer", postRequest)
      .then((response) => {
        if (response) {
          React.useState.UserData.username = username;
          console.log("Username saved to UserData");
          console.log(
            "Login request Sent! \n Post request sent! " +
              postRequest.username +
              postRequest.password
          );
          if (response) {
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
