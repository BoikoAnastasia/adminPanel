import { type ComponentType, type SVGProps } from 'react';
import clsx from 'clsx';
// img
import Ellipsis from '../../assets/icons/ellipsis.svg?react';
import ArrowUp from '../../assets/icons/arrow-green.svg?react';
import ArrowDown from '../../assets/icons/arrow-red.svg?react';
// styles
import styles from './MiniCardInfo.module.css';

interface MiniCardInfoProps {
  svg: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  onClick: () => void;
  count: string;
  statistic: number;
  isUp: boolean;
}

export const MiniCardInfo = ({ svg: Icon, count, isUp = false, onClick, statistic, title }: MiniCardInfoProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.title}>
          <Icon className={styles.icon} />
          <span>{title}</span>
        </div>
        <button className={styles.ellipsis} onClick={onClick}>
          <Ellipsis />
        </button>
      </div>
      <div className={styles.info}>
        <div>{count}</div>
        <div className={clsx(styles.diagram, isUp ? styles.green : styles.red)}>
          <span>{statistic}%</span>
          {isUp ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
    </div>
  );
};
