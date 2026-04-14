import { skills } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import Tag from "../shared/Tag";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <SectionHeader title="Skills" />
        <div className={styles.groups}>
          {skills.map((category) => (
            <div key={category.name} className={styles.group}>
              <h3 className={styles.groupTitle}>{category.name}</h3>
              <div className={styles.tags}>
                {category.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
