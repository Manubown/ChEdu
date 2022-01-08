import React, { Component } from "react";
import { Dimensions, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import * as Chess from "chess.js";

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

        QueensGambit:
          "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
      },
    },
  };

  changeFen = (customFen) => {
    switch (customFen) {
      case "SicilianDefence":
        this.setState({
          fen: this.state.startingPositions.Openings.SicilianDefence,
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

              QueensGambit:
                "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            },
          },
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
            <Button
              style={styles.Buttons}
              onPress={() => {
                changeFen("QueensGambit");
              }}
              title="Change"
            />
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
