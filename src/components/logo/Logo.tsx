// img
import LogoSvg from '../../assets/icons/logo.svg?react';
// styles
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoSvg />
      <div className={styles.title}>Админ панель</div>
    </div>
  );
};
