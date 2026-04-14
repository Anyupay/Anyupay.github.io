import { publications } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import styles from "./Publications.module.css";

export default function Publications() {
  return (
    <section className={styles.section} id="publications">
      <div className={styles.container}>
        <SectionHeader title="Publications" />
        <ul className={styles.list}>
          {publications.map((pub, i) => (
            <li key={i} className={styles.item}>
              <p className={styles.citation}>
                {pub.authors.split("Pan, A.").map((part, j, arr) =>
                  j < arr.length - 1 ? (
                    <span key={j}>
                      {part}
                      <strong>Pan, A.</strong>
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}{" "}
                ({pub.year}). {pub.title}.{" "}
                <em>{pub.journal}</em>
                {pub.volume && `, ${pub.volume}`}
                {pub.pages && `, ${pub.pages}`}.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
