import type { InputHTMLAttributes } from 'react';
import SearchIcon from '../../assets/icons/search.svg?react';
import styles from './CustomInput.module.css';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

export const CustomeInput = ({ icon = false, className, ...props }: CustomInputProps) => {
  return (
    <div className={styles.wrapper}>
      {icon && <SearchIcon className={styles.icon} />}
      <input className={`${styles.input} ${className ?? ''}`} {...props} />
    </div>
  );
};
