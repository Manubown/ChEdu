import React, { Component } from "react";
import { Dimensions, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import * as Chess from "chess.js";
import {
  RightCircleTwoTone,
  LeftCircleTwoTone,
} from '@ant-design/icons';

import Chessboard from "chessboardjsx";

const windowHeight = Dimensions.get("window").height;

class BasicChessBoardLogic extends Component {
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

    //FenListe
    startingPositions: {
      Openings: {
        SicilianDefence:
          "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",

        FrenchDefense:
          "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        
        RuyLopez:
          "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        
        CaroKann:
          "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",

        ItalianGame:      
          "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        
        ScandinavianDefense:
          "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        
        PircDefense:
          "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
        
        ScotchGame:
          "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",

        ViennaGame:
          "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1",
        
        QueensGambit:
          "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        
        SlavDefense:
          "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        
        IndianDefense:
          "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        
        DutchDefense:
          "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        
        EnglishOpening:
          "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
        
        CatalanOpening:
          "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
        
        RetiOpening:
          "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 1 2"
      },
      MiddleGame:{

      },
      EndGame:{

      },
      BasicRules:{

      },
    },
  };

  changeFen = (customFen) => {
    
        this.setState({
          fen: "start",
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

        this.game = new Chess(this.state.fen);
        this.game.position = this.state.fen;

      switch (customFen) {
        case "SicilianDefence":
          this.setState({
            fen: this.state.startingPositions.Openings.SicilianDefence,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "FrenchDefense":
          this.setState({
            fen: this.state.startingPositions.Openings.FrenchDefense,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "RuyLopez":
          this.setState({
            fen: this.state.startingPositions.Openings.RuyLopez,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "CaroKann":
          this.setState({
            fen: this.state.startingPositions.Openings.CaroKann,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "ItalianGame":
          this.setState({
            fen: this.state.startingPositions.Openings.ItalianGame,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "ScandinavianDefense":
          this.setState({
            fen: this.state.startingPositions.Openings.ScandinavianDefense,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "PircDefense":
          this.setState({
            fen: this.state.startingPositions.Openings.PircDefense,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "ScotchGame":
          this.setState({
            fen: this.state.startingPositions.Openings.ScotchGame,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "ViennaGame":
          this.setState({
            fen: this.state.startingPositions.Openings.ViennaGame,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "QueensGambit":
          this.setState({
            fen: this.state.startingPositions.Openings.QueensGambit,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "SlavDefense":
          this.setState({
            fen: this.state.startingPositions.Openings.SlavDefense,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "IndianDefense":
          this.setState({
            fen: this.state.startingPositions.Openings.IndianDefense,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "DutchDefense":
          this.setState({
            fen: this.state.startingPositions.Openings.DutchDefense,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "EnglishOpening":
          this.setState({
            fen: this.state.startingPositions.Openings.EnglishOpening,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "CatalanOpening":
          this.setState({
            fen: this.state.startingPositions.Openings.CatalanOpening,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;

        case "RetiOpening":
          this.setState({
            fen: this.state.startingPositions.Openings.RetiOpening,
          });
          this.game = new Chess(this.state.fen);
          this.game.position = this.state.fen;
        break;
    }
  };

  componentDidMount() {
    //this.state.fen übergeben für Logik
    this.game = new Chess(this.state.fen);
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
    //Game Over
    let possibleMoves = this.game.moves();
    if (
      this.game.game_over() === true ||
      this.game.in_draw() === true ||
      possibleMoves.length === 0
    ) {
      console.log("Game OVER!");
    }
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
      changeFen: this.changeFen,
    });
  }
}

export default function BasicChessBoard() {
  return (
    <div>
      <BasicChessBoardLogic>
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
          changeFen,
        }) => (
          <div>
            <Chessboard
              id="BasicChessBoard"
              width={(windowHeight / 4) * 3}
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
            
            <View style = {{flexDirection: "row"}}>
              <TouchableOpacity 
                onPress={() => {
                  changeFen("SicilianDefence");
                }}
              >
                <Text>Sicilian Defense  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("FrenchDefense");
                }}
              >
                <Text>French Defense  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("RuyLopez");
                }}
              >
                <Text>Ruy López  </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => {
                  changeFen("CaroKann");
                }}
              >
                <Text>Caro-Kann Defense  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("ItalianGame");
                }}
              >
                <Text>Italian Game  </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => {
                  changeFen("ScandinavianDefense");
                }}
              >
                <Text>Scandinavian Defense  </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => {
                  changeFen("PircDefense");
                }}
              >
                <Text>Pirc Defense  </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => {
                  changeFen("ScotchGame");
                }}
              >
                <Text>Scotch Game  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("ViennaGame");
                }}
              >
                <Text>Vienna Game  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("QueensGambit");
                }}
              >
                <Text>Queen's Gambit </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("SlavDefense");
                }}
              >
                <Text>Slav Defense  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("IndianDefense");
                }}
              >
                <Text>Indian Defense  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("DutchDefense");
                }}
              >
                <Text>DutchDefense  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("EnglishOpening");
                }}
              >
                <Text>English Opening  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("CatalanOpening");
                }}
              >
                <Text>Catalan Opening  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => {
                  changeFen("RetiOpening");
                }}
              >
                <Text>Réti Opening  </Text>
              </TouchableOpacity>
            </View>
            {/*Tools*/}
            <View style = {{flexDirection: "row"}}>
              <LeftCircleTwoTone twoToneColor={"#185a5c"}/>
              <RightCircleTwoTone twoToneColor={"#185a5c"}/>
            </View>
          </div>
        )}
      </BasicChessBoardLogic>
      
    </div>
    
  );
}

const styles = StyleSheet.create({
  Buttons: {
    margin: 15,
    width: 150,
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
