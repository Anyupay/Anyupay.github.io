import { awards } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import styles from "./Awards.module.css";

export default function Awards() {
  return (
    <section className={styles.section} id="awards">
      <div className={styles.container}>
        <SectionHeader title="Awards & Honors" />
        <ul className={styles.list}>
          {awards.map((award, i) => (
            <li key={i} className={styles.item}>
              <div>
                <h3 className={styles.title}>{award.title}</h3>
                <p className={styles.detail}>{award.detail}</p>
              </div>
              <span className={styles.date}>{award.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
