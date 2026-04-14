import { education } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import TimelineItem from "../shared/TimelineItem";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.container}>
        <SectionHeader title="Education" />
        <div className={styles.timeline}>
          {education.map((edu) => (
            <TimelineItem
              key={edu.institution}
              period={edu.period}
              title={edu.institution}
              subtitle={edu.degree}
              description={edu.program}
              extra={edu.honors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
