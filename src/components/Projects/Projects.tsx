import { projects, researchProjects } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import Tag from "../shared/Tag";
import styles from "./Projects.module.css";

const projectSections = [
  { title: "Selected Research & AI Projects", items: researchProjects },
  { title: "Selected CS/ML Projects", items: projects },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        {projectSections.map((section) => (
          <div key={section.title} className={styles.group}>
            <SectionHeader title={section.title} />
            <div className={styles.cards}>
              {section.items.map((project) => (
                <div key={project.title} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.meta}>
                      {project.affiliation && <>{project.affiliation} &middot; </>}
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
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {project.linkLabel ?? "View project"}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
