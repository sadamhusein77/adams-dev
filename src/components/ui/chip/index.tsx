import React from 'react';
import { cn } from '@/libs/utils';
import styles from './style.module.scss';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, children, className, onClose, ...rest }) => {
  const mergedClassName = cn(styles.chip, styles.default, className);

  return (
    <div className={mergedClassName} {...rest}>
      {label}
      {children}
      {onClose && (
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Chip;
