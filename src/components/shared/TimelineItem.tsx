import styles from "./TimelineItem.module.css";

interface Props {
  period: string;
  title: string;
  subtitle?: string;
  description?: string;
  extra?: string;
}

export default function TimelineItem({
  period,
  title,
  subtitle,
  description,
  extra,
}: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.dot} />
      <div className={styles.content}>
        <span className={styles.period}>{period}</span>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {description && <p className={styles.description}>{description}</p>}
        {extra && <p className={styles.extra}>{extra}</p>}
      </div>
    </div>
  );
}
