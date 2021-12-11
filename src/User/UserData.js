import { createContext } from "react";

export const UserData = createContext({
  Username: "DEFAULT",
  ELO: 0,
  PLAYEDGAMES: 0,
  WONGAMES: 0,
  LOSGAMES: 0,
  SinglePlayer: 0,
  Multiplayer: 0,
  TimeSpend: 0,
});

export const ChangeUserName = (Username) => {
  Username;
};
