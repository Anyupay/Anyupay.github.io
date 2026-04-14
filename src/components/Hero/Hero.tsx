import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFileText,
} from "react-icons/fi";
import { name, tagline, subtitle, socialLinks } from "../../data/content";
import styles from "./Hero.module.css";

const iconMap: Record<string, React.ReactNode> = {
  email: <FiMail />,
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  cv: <FiFileText />,
};

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <img src="/avatar.jpeg" alt="Anyu Pan" className={styles.avatar} />
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.links}>
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              className={styles.pill}
              target={link.icon === "cv" ? "_blank" : undefined}
              rel={link.icon === "cv" ? "noopener noreferrer" : undefined}
            >
              {iconMap[link.icon]}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
