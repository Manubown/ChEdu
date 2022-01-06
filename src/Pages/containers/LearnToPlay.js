import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Switch,
} from "react-native"; //components

import cheduLogo from "../Pictures/Logo.png";
import loginPictureBlack from "../Pictures/login.png";
import loginPictureWhite from "../Pictures/login_white.png";
import registerPictureBlack from "../Pictures/register.png";
import registerPictureWhite from "../Pictures/register_white.png";
import userPictureBlack from "../Pictures/user.png";
import userPictureWhite from "../Pictures/user_white.png";
import {
  RightCircleTwoTone,
  LeftCircleTwoTone,
} from '@ant-design/icons';

import PropTypes from "prop-types";
import Chessboard from "chessboardjsx";
import * as Chess from "chess.js"; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor
import CheduChessBoard from "../ChessBoardBown/CheduChessBoard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width } = Dimensions.get("window");

const x = 100;
const y = 200;

class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };
  state = {
    fen: "start", //auf Lichess nachschauen
    // square styles for active drop square
    dropSquareStyle: {},
    // custom square styles
    squareStyles: {},
    // square with the currently clicked piece
    pieceSquare: "",
    // currently clicked square
    square: "",
    // array of past game moves
    history: [], //pgn
  };
  /*constructor() {

    Resource.screen1 = this;
    
    Resource.screen1.setState({
      fen: "start", //auf Lichess nachschauen
      // square styles for active drop square
      dropSquareStyle: {},
      // custom square styles
      squareStyles: {},
      // square with the currently clicked piece
      pieceSquare: "",
      // currently clicked square
      square: "",
      // array of past game moves
      history: [], //pgn
    });
  } */

  componentDidMount() {
    this.game = new Chess(); //this.state.fen übergeben für Logik
  }

  // keep clicked square style and remove hint squares
  removeHighlightSquare = () => {
    this.setState(({ pieceSquare, history }) => ({
      squareStyles: squareStyling({ pieceSquare, history }),
    }));
  };

  // show possible moves
  highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, #185a5c 36%, transparent 40%)",
              borderRadius: "50%",
            },
          },
          ...squareStyling({
            history: this.state.history,
            pieceSquare: this.state.pieceSquare,
          }),
        };
      },
      {}
    );

    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles },
    }));
  };

  onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;
    this.setState(({ history, pieceSquare }) => ({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      squareStyles: squareStyling({ pieceSquare, history }),
    }));
  };

  onMouseOverSquare = (square) => {
    // get list of possible moves for this square
    let moves = this.game.moves({
      square: square,
      verbose: true,
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    this.highlightSquare(square, squaresToHighlight);
  };

  onMouseOutSquare = (square) => this.removeHighlightSquare(square);

  // central squares get diff dropSquareStyles
  onDragOverSquare = (square) => {
    this.setState({
      dropSquareStyle:
        square === "e4" || square === "d4" || square === "e5" || square === "d5"
          ? { backgroundColor: "cornFlowerBlue" }
          : { boxShadow: "inset 0 0 1px 4px #185a5c" },
    });
  };

  onSquareClick = (square) => {
    this.setState(({ history }) => ({
      squareStyles: squareStyling({ pieceSquare: square, history }),
      pieceSquare: square,
    }));

    let move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    this.setState({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      pieceSquare: "",
    });
  };

  onSquareRightClick = (square) =>
    this.setState({
      squareStyles: { [square]: { backgroundColor: "deepPink" } },
    });

  render() {
    const { fen, dropSquareStyle, squareStyles } = this.state;

    return this.props.children({
      squareStyles,
      position: fen,
      onMouseOverSquare: this.onMouseOverSquare,
      onMouseOutSquare: this.onMouseOutSquare,
      onDrop: this.onDrop,
      dropSquareStyle,
      onDragOverSquare: this.onDragOverSquare,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick,
    });
  }
}

export default class TempPage extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: "white",
    SwitchLogin: loginPictureBlack,
    SwitchRegister: registerPictureBlack,
    SwitchUser: userPictureBlack,
    SunMoon: "☀️",
    ShadowBackgroundColor: "white",
  };

  handleSwitchBackground = () => {
    let { switchValue } = this.state;

    if (switchValue === true) {
      this.setState({
        switchValue,
        backgroundColor: "#121212",
        SwitchLogin: loginPictureWhite,
        SwitchRegister: registerPictureWhite,
        SwitchUser: userPictureWhite,
        SunMoon: "🌙",
      });
    } else if (switchValue === false) {
      this.setState({
        switchValue,
        backgroundColor: "white",
        SwitchLogin: loginPictureBlack,
        SwitchRegister: registerPictureBlack,
        SwitchUser: userPictureBlack,
        SunMoon: "☀️",
      });
    }
  };

  render() {
    let { backgroundColor } = this.state;
    return (
      <View
        style={{
          windowWidth,
          windowHeight,
          backgroundColor: this.state.backgroundColor,
        }}
      >
        {/*Topbar*/}
        <View style={styles.Topbar}>
          <View style={styles.RightSwitch}>
            <Text>{this.state.SunMoon}</Text>
            <Switch
              value={this.state.switchValue}
              onValueChange={(switchValue) =>
                this.setState({ switchValue }, () =>
                  this.handleSwitchBackground()
                )
              }
            />
          </View>
        </View>

        {/*ChessboardEnvironment*/}
        <View style = {{alignItems:"center"}}>
          <View style={{flexDirection: "row"}}>
            <div>
              <HumanVsHuman>
                {({
                  position,
                  onDrop,
                  onMouseOverSquare,
                  onMouseOutSquare,
                  squareStyles,
                  dropSquareStyle,
                  onDragOverSquare,
                  onSquareClick,
                  onSquareRightClick,
                }) => (
                  <Chessboard
                    id="humanVsHuman"
                    width={(windowHeight/4)*3}
                    position={position} //position zB. (a6: 'kW') ==> König auf a6
                    onDrop={onDrop}
                    onMouseOverSquare={onMouseOverSquare}
                    onMouseOutSquare={onMouseOutSquare}
                    boardStyle={{
                      borderRadius: "5px",
                      boxShadow: `0 5px 15px #185a5c`,
                    }}
                    squareStyles={squareStyles}
                    dropSquareStyle={dropSquareStyle}
                    onDragOverSquare={onDragOverSquare}
                    onSquareClick={onSquareClick}
                    onSquareRightClick={onSquareRightClick}
                  />
                )}
              </HumanVsHuman>
            </div>
          </View>

        {/*Tools*/}
          <View style = {{flexDirection: "row"}}>
            <LeftCircleTwoTone twoToneColor={"#185a5c"}/>
            <RightCircleTwoTone twoToneColor={"#185a5c"}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Topbar: {
    margin: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },

  //Topbar Styles
  RightSwitch: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
  },

  LoginStyle: {
    left: 0,
    flexDirection: "row",
  },

  RegisterStyle: {
    left: windowWidth / 4,
    flexDirection: "row",
  },

  UserStyle: {
    position: "absolute",
    right: windowWidth / 4,
    flexDirection: "row",
  },

  RegisterStyle: {
    position: "absolute",
    left: windowWidth / 4,
    flexDirection: "row",
  },
  //Homepage styles
  Column: {
    justifyContent: "center",
    alignItems: "center",
  },

  Box: {
    justifyContent: "center",
  },

  Logo: {
    width: windowWidth / 6.85,
    height: windowWidth / 6.85,
  },

  TwoKings: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },

  CheduBlue: {
    color: "#00578a",
    fontSize: windowWidth / 20,
    fontWeight: "bold",
  },
  CheduDarkBlue: {
    color: "#0e113f",
    fontSize: windowWidth / 20,
    fontWeight: "bold",
  },

  BaseShadow: {
    width: windowWidth / 2,
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: "#328da8",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5,
    elevation: 4,
  },

  Buttons: {
    margin: 15,
    width: 150,
  },

  buttonView: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: (windowHeight / 10) * 8,
    margin: 30,
    padding: 20,
  },

  PlayLog: {
    flex: 1,
    height: (windowHeight / 10) * 8,
    width: 80,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  ChessBoard: {
    height: (windowHeight / 10) * 5,
    width: (windowHeight / 10) * 5,
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  ChessBoardChildren: {
    fontSize: 10,
    borderWidth: 2,
  },

  BottonVield: {
    height: 100,
    width: 100,
    marginBottom: 80,
    backgroundColor: "white",
    borderRadius: 90,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

const squareStyling = ({ pieceSquare, history }) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: { backgroundColor: "#185a5c" },
    ...(history.length && {
      [sourceSquare]: {
        backgroundColor: "#3c8688",
      },
    }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: "#185a5c",
      },
    }),
  };
};