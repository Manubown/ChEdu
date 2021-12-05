import { createContext } from "react";

export default ColorContext = createContext({
  didRedirect: false,
  playerDidRedirect: () => {},
  playerDidNotRedirect: () => {},
});
