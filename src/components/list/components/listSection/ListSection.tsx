// components
import { ListItem } from '../listItem/ListItem';
// img
import ChevronRight from '../../../../assets/icons/chevron-right.svg?react';
// style
import styles from './ListSection.module.css';
// types
import type { ListItemProps, ListSectionProps } from '../../../../types/types';

export const ListSection = ({ listTitlesItem, titleSection, icon: Icon, isOpen, onToggle }: ListSectionProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.top} ${isOpen && styles.activeTitle}`} onClick={onToggle}>
        <div className={styles.title}>
          <Icon width={14} height={14} />
          <span>{titleSection}</span>
        </div>
        <ChevronRight className={isOpen ? styles.reverseIcon : styles.icon} />
      </div>
      <div className={`${styles.items} ${isOpen && styles.isOpen}`}>
        {listTitlesItem.map((item: ListItemProps) => (
          <ListItem key={item.title} title={item.title} active={item.active} href={item.href} />
        ))}
      </div>
    </div>
  );
};
