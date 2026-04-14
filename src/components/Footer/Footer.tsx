import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Anyu Pan. Built with React + TypeScript.</p>
    </footer>
  );
}
