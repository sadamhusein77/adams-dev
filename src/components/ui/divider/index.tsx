import { cn } from "@/libs/utils";
import styles from './style.module.scss';

export const Divider: React.FC<{ className?: string }> = ({ className }) => (
    <div className={cn(styles.divider, className)}></div>
  );