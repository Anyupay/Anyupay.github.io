import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { email } from "../../data/content";
import SectionHeader from "../shared/SectionHeader";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <SectionHeader
          title="Contact"
          subtitle="Feel free to reach out for research collaborations or opportunities"
        />
        <div className={styles.links}>
          <a href={`mailto:${email}`} className={styles.item}>
            <FiMail className={styles.icon} />
            <span>{email}</span>
          </a>
          <a
            href="https://github.com/Anyupay"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <FiGithub className={styles.icon} />
            <span>github.com/Anyupay</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anyu-pan/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <FiLinkedin className={styles.icon} />
            <span>linkedin.com/in/anyu-pan</span>
          </a>
        </div>
      </div>
    </section>
  );
}
