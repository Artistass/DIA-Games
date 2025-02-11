import { useEffect, useState } from "react";
import Board from "./Board.jsx";
import styles from "./TicTacToe.module.css";
import GameOver from "./GameOver.jsx";
import GameState from "./GameStates.js";
import Reset from "./Reset.jsx";

const PLAYER_X = "X";
const PLAYER_O = "O";

const WINNING_COMBINATIONS = [
  // Rows
  { combo: [0, 1, 2], strikeClass: "strike_row_1" },
  { combo: [3, 4, 5], strikeClass: "strike_row_2" },
  { combo: [6, 7, 8], strikeClass: "strike_row_3" },
  // Columns
  { combo: [0, 3, 6], strikeClass: "strike_column_1" },
  { combo: [1, 4, 7], strikeClass: "strike_column_2" },
  { combo: [2, 5, 8], strikeClass: "strike_column_3" },
  // Diagonals
  { combo: [0, 4, 8], strikeClass: "strike_diagonal_1" },
  { combo: [2, 4, 6], strikeClass: "strike_diagonal_2" },
];

export default function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const checkWinner = (tiles, setStrikeClass, setGameState) => {
    for (const { combo, strikeClass } of WINNING_COMBINATIONS) {
      const titleValue1 = tiles[combo[0]];
      const titleValue2 = tiles[combo[1]];
      const titleValue3 = tiles[combo[2]];

      if (
        titleValue1 !== null &&
        titleValue1 === titleValue2 &&
        titleValue1 === titleValue3
      ) {
        setStrikeClass(strikeClass);
        if (titleValue1 === PLAYER_X) {
          setGameState(GameState.playerXWin);
        } else 
          setGameState(GameState.playerOWin);
          return;
      }
    }

    const areAllTilesFilled = tiles.every((tile) => tile !== null);
    if (areAllTilesFilled) {
      setGameState(GameState.draw);
    }
  };

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const resetGame = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  }

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={resetGame}/>
    </div>
  );
}
