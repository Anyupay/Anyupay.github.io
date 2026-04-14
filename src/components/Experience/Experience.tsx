import { experience } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <SectionHeader title="Teaching Experience" />
        <div className={styles.list}>
          {experience.map((exp) => (
            <div key={exp.role + exp.organization} className={styles.item}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.org}>{exp.organization}</p>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>
              {exp.bullets && (
                <ul className={styles.bullets}>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
