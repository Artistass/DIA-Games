import styles from "./Tic_Tac_Toe.module.css";

export default function Strike({ strikeClass }) {
  return (
    <div className={`${styles.strike} ${styles[strikeClass]}`}></div>
  );
}

