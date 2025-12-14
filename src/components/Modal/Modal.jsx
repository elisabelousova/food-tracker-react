import { useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  const [value, setValue] = useState("");

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={styles.title}>Прием пищи</h3>

        <input
          className={styles.input}
          placeholder="Введите блюдо"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className={styles.closeBtn} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}