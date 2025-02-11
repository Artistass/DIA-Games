import Tile from "./Tile";
import Strike from "./Strike";
import styles from "./TicTacToe.module.css";

export default function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className={styles.board}>
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className={`${styles.right_border} ${styles.bottom_border}`}
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className={`${styles.right_border} ${styles.bottom_border}`}
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className={styles.bottom_border}
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className={`${styles.right_border} ${styles.bottom_border}`}
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className={`${styles.right_border} ${styles.bottom_border}`}
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className={styles.bottom_border}
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className={styles.right_border}
      />
      <Tile
      playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className={styles.right_border}
      />
      <Tile 
      playerTurn={playerTurn}
      onClick={() => onTileClick(8)} 
      value={tiles[8]} />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}
