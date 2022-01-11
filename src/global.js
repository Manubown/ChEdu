import React from "react";

import loginPictureBlack from "./Pages/Pictures/login.png";
import registerPictureBlack from "./Pages/Pictures/register.png";
import userPictureBlack from "./Pages/Pictures/user.png";
import black_separator from "./Pages/Pictures/black_separator.png";

class Global extends React.Component {
  constructor(active, xTabOne, xTabTwo, xTabThree, switchValue, SunMoon) {
    super();
    this.active = active;
    this.xTabOne = xTabOne; //x co-ordinate of tab one
    this.xTabTwo = xTabTwo; //x co-ordinate of tab two
    this.xTabThree = xTabThree; //x co-ordinate of tab three
    this.switchValue = switchValue;
    this.SunMoon = SunMoon;
  }

  getSwitchValue = () => {
    return this.switchValue;
  };

  setSwitchValue = () => {
    return this.switchValue
      ? (this.switchValue = false)
      : (this.switchValue = true);
  };

  handleSwitchBackground = () => {
    if (this.switchValue === true) {
      this.SunMoon = "🌙";
    } else if (this.switchValue === false) {
      this.SunMoon = "☀️";
    }
  };
}

const g = new Global(0, 0, 0, 0, false, "☀️");
global.g = g;

//
global.active = g.active;
global.xTabOne = g.xTabOne; //x co-ordinate of tab one
global.xTabTwo = g.xTabTwo; //x co-ordinate of tab two
global.xTabThree = g.xTabThree; //x co-ordinate of tab three
global.switchValue = g.switchValue;
global.SunMoon = "☀️";

global.setSwitchValue = g.setSwitchValue(g.switchValue);
