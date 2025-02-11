import GameState from "./GameStates.js";
import styles from "./TicTacToe.module.css";

export default function Reset({gameState, onReset}) {

  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className={styles.reset_button}>Reset</button>
  )
}
