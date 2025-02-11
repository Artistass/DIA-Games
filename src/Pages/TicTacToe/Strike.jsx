import styles from "./TicTacToe.module.css";

export default function Strike({ strikeClass }) {
  return (
    <div className={`${styles.strike} ${styles[strikeClass]}`}></div>
  );
}

