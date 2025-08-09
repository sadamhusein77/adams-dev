import { cn } from '@/libs/utils';

import style from './style.module.scss';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(style.skeleton, className)}
      {...props}
      datatype="skeleton"
      data-testid="skeleton-loader"
    />
  );
}

export { Skeleton };
