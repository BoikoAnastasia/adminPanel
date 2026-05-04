import styles from './TitleSection.module.css';

export const TitleSection = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.titleSection}>{children}</section>;
};
