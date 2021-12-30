import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  console.log("Store data");
  try {
    const jsonValue = JSON.stringify(value);
    console.log("Store Data: " + jsonValue);
    await AsyncStorage.setItem("@testStorage", jsonValue);
  } catch (e) {
    console.log("Store data Error: " + e);
  }
};

export const getData = async () => {
  console.log("Get data");
  try {
    const jsonValue = await AsyncStorage.getItem("@testStorage");
    console.log("try");
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
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
