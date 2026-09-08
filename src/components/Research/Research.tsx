import { research } from "../../data/content";
import type { ProjectDetails } from "../../types";
import SectionHeader from "../shared/SectionHeader";
import Tag from "../shared/Tag";
import styles from "./Research.module.css";

function ResearchDetails({ project }: { project: ProjectDetails }) {
  return (
    <>
      <ul className={styles.bullets}>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
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
          {project.linkLabel ?? "View project"} <span aria-hidden="true">↗</span>
        </a>
      )}
    </>
  );
}

export default function Research() {
  return (
    <section className={styles.section} id="research">
      <div className={styles.container}>
        <SectionHeader
          title="Research Experience"
          subtitle="Machine learning for drug discovery, behavior analysis, and medical imaging"
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
                {"projects" in project && (
                  <p className={styles.meta}>PI: {project.principalInvestigator}</p>
                )}
              </div>
              {"projects" in project ? (
                project.projects.map((subproject) => (
                  <div key={subproject.title} className={styles.subproject}>
                    <div className={styles.cardHeader}>
                      <h4 className={styles.cardTitle}>{subproject.title}</h4>
                      <p className={styles.meta}>{subproject.period}</p>
                    </div>
                    <ResearchDetails project={subproject} />
                  </div>
                ))
              ) : (
                <ResearchDetails project={project} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
