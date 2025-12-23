import { useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, onSave }) {
  const [name, setName] = useState("Завтрак");
  const [kcal, setKcal] = useState("");
  const [B, setB] = useState("");
  const [J, setJ] = useState("");
  const [U, setU] = useState("");

  if (!isOpen) return null;

  function handleSave() {
    onSave({
  mealType, // "Завтрак" | "Обед" | "Ужин"
  kcal,
  B,
  J,
  U
});

    setKcal("");
    setB("");
    setJ("");
    setU("");
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>Прием пищи</h3>

        <select className={styles.input} value={name} onChange={(e) => setName(e.target.value)}>
          <option>Завтрак</option>
          <option>Обед</option>
          <option>Ужин</option>
          <option>+ Ещё</option>
        </select>

        <input className={styles.input} placeholder="Ккал" onChange={(e) => setKcal(e.target.value)} />
        <input className={styles.input} placeholder="Б" onChange={(e) => setB(e.target.value)} />
        <input className={styles.input} placeholder="Ж" onChange={(e) => setJ(e.target.value)} />
        <input className={styles.input} placeholder="У" onChange={(e) => setU(e.target.value)} />

        <button className={styles.saveBtn} onClick={handleSave}>Сохранить</button>
      </div>
    </div>
  );
}
