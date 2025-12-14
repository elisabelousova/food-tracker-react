import styles from "./Norm.module.css";

export default function Norm({ percent }) {
  return (
    <div className={styles.normBlock}>
      <span className={styles.text}>
        <span className={styles.number}>{percent}%</span> вашей нормы
      </span>
    </div>
  );
}
