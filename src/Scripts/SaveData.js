import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
/*
Benutzername: null,
Elo: null,
PlayedGames: null,
WonGames: null,
LostGames: null,
*/
export const storeData = async (data, Benutzername) => {
  console.log("Store data");
  try {
    console.log("Store Data: " + data);
    const Won = parseInt(data.Online.WonBlack) + parseInt(data.Online.WonWhite);
    const Los =
      parseInt(data.Online.LostBlack) + parseInt(data.Online.LostWhite);
    const PlayedGames = parseInt(Won) + parseInt(Los);

    const storingString =
      '{"Benutzername":"' +
      Benutzername.split("@")[0] +
      '","Elo":"' +
      data.Online.OverallPoints +
      '","PlayedGames":"' +
      PlayedGames +
      '","WonGames":"' +
      Won +
      '","LosGames":"' +
      Los +
      '"}';

    console.log(storingString);
    await AsyncStorage.setItem("@testStorage", storingString);
    return true;
  } catch (e) {
    console.log("Store data Error: " + e);
    return false;
  }
};

export const getData = async () => {
  console.log("Get data");
  try {
    const jsonValue = await AsyncStorage.getItem("@testStorage");
    console.log("try");
    console.log("GET data Json Value: " + jsonValue);

    return jsonValue;
  } catch (e) {
    console.log("Get data Error: " + e);
  }
};

export const deleteData = async () => {
  console.log("Delete data");
  try {
    await AsyncStorage.removeItem("@testStorage");
  } catch (e) {
    console.log("Delete data Error: " + e);
  }
};
