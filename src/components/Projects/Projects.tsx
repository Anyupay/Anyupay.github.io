import { projects } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import Tag from "../shared/Tag";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <SectionHeader title="Projects" />
        <div className={styles.cards}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.meta}>
                  {project.role} &middot; {project.period}
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
