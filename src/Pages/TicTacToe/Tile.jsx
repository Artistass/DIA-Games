import styles from "./TicTacToe.module.css";

export default function Tile({className, value, onClick, playerTurn}) {

  let hoverClass = null;
  if (value == null && playerTurn !== null) {
    hoverClass = styles[`${playerTurn.toLowerCase()}_hover`];
  }
  
return (
  <div
    onClick={onClick}
    className={`${hoverClass} ${styles.tile} ${className}`}
  >
    {value}
  </div>
);

}
