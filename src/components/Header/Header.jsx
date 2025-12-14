import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.avatar} src="/avatar.png" alt="Avatar" />
    </header>
  );
}
