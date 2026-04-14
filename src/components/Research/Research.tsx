import { research } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import Tag from "../shared/Tag";
import styles from "./Research.module.css";

export default function Research() {
  return (
    <section className={styles.section} id="research">
      <div className={styles.container}>
        <SectionHeader
          title="Research Experience"
          subtitle="Selected research projects at the intersection of ML and biomedical engineering"
        />
        <div className={styles.cards}>
          {research.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.meta}>
                  {project.affiliation} &middot; {project.role} &middot;{" "}
                  {project.period}
                </p>
              </div>
              <ul className={styles.bullets}>
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
