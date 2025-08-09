import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './style.module.scss';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className, ...rest }) => {
  const safeValue = Math.max(0, Math.min(100, value));
  const mergedInnerClass = twMerge(styles.inner, className);

  return (
    <div className={styles.wrapper} {...rest}>
      <div
        className={mergedInnerClass}
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
};

export default ProgressBar;
