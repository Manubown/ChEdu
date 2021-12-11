import React from "react";
import { UserData } from "../../User/UserData";

import axios from "axios";
import bcrypt from "bcryptjs";

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
    PlayerName: username,
    HashedPassword: password,
  };
  console.log(postRequest.PlayerName + postRequest.HashedPassword);
  try {
    const response = await axios
      .post("https://chedu.at:5000/VerifyPlayer", postRequest)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  } catch (error) {
    console.log(error);
  }
};
