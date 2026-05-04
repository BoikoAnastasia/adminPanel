import type { ListItemProps } from '../../../../types/types';
// styles
import styles from './ListItem.module.css';

export const ListItem = ({ title, active }: ListItemProps) => {
  return <button className={`${styles.item} ${active ? styles.active : ''}`}>{title}</button>;
};
