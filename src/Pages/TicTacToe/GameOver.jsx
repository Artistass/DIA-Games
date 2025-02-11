import styles from "./TicTacToe.module.css";
import GameState from "./GameStates.js";

export default function GameOver({gameState}) {
 switch(gameState) {
  case GameState.inProgress:
    return <></>;
  case GameState.playerXWin:
    return <div className={styles.game_over}>Player X wins!</div>;
    case GameState.playerOWin:
      return <div className={styles.game_over}>Player O wins!</div>;
      case GameState.draw:
        return <div className={styles.game_over}>It's a draw!</div>;
        default:
          return <></>

 }
}
