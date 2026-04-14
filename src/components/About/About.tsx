import { about } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <SectionHeader title="About" />
        <div className={styles.grid}>
          <div className={styles.text}>
            {about.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className={styles.info}>
            {about.info.map((item) => (
              <li key={item.label}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
