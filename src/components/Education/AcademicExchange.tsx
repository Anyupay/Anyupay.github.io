import { academicExchange } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import TimelineItem from "../shared/TimelineItem";
import styles from "./Education.module.css";

export default function AcademicExchange() {
  return (
    <section className={styles.section} id="academic-exchange">
      <div className={styles.container}>
        <SectionHeader title="Academic Exchange" />
        <div className={styles.timeline}>
          {academicExchange.map((exchange) => (
            <TimelineItem
              key={exchange.organization}
              period={exchange.period}
              title={exchange.organization}
              subtitle={exchange.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
