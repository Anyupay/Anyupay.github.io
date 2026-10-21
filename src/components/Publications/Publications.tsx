import { publications } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import styles from "./Publications.module.css";

export default function Publications() {
  return (
    <section className={styles.section} id="publications">
      <div className={styles.container}>
        <SectionHeader title="Publications" />
        <ul className={styles.list}>
          {publications.map((pub) => (
            <li key={pub.title} className={styles.item}>
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
                {pub.status === "submitted" && "Submitted to the "}
                <em>{pub.journal}</em>
                {pub.status === "accepted" && ", accepted"}
                {pub.volume && `, ${pub.volume}`}
                {pub.pages && `, ${pub.pages}`}.
                {pub.link && (
                  <>
                    {" "}
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${pub.title} on bioRxiv`}
                      className={styles.paperLink}
                    >
                      [Paper]
                    </a>
                  </>
                )}
              </p>
              {pub.contributionNote && (
                <p className={styles.note}>{pub.contributionNote}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
