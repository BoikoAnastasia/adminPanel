import type { ComponentType, SVGProps } from 'react';
import clsx from 'clsx';
import styles from './CustomButton.module.css';

type ButtonVariant = 'pink' | 'gradient';
type ButtonSizeVariant = 'big';

interface ButtonProps {
  title: string;
  svg?: ComponentType<SVGProps<SVGSVGElement>>;
  isRightSvg?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSizeVariant;
  stylesProps?: string;
}

export const CustomButton = ({ title, svg: Icon, isRightSvg = true, variant, size }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size])}
      style={{ flexDirection: isRightSvg ? 'row' : 'row-reverse' }}
    >
      <span>{title}</span>
      {Icon && <Icon />}
    </button>
  );
};
