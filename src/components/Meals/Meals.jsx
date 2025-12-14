import styles from "./Meals.module.css";

export default function Meals({ meals }) {
  return (
    <div className={styles.meals}>
      {meals.map((m) => (
        <div key={m.name} className={styles.mealItem}>
          <span className={styles.mealName}>{m.name}</span>
          <span className={styles.emojis}>🍉 🍋 🍎</span>
        </div>
      ))}
    </div>
  );
}

