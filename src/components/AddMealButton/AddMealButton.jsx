import styles from "./AddMealButton.module.css";

export default function AddMealButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Добавить прием пищи
    </button>
  );
}
