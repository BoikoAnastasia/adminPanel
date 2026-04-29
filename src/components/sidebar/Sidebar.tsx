// components
import { Logo } from '../logo/Logo';
// img
import ChevronLeft from '../../assets/icons/chevron-left.svg?react';
import ChevronRight from '../../assets/icons/chevron-right.svg?react';
// styles
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.top}>
        <Logo />
        <div>
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div>
        <input type="text" placeholder="Поиск" />
      </div>
      <div></div>
    </nav>
  );
};
