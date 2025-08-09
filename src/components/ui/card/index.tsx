import React from 'react'

import style from './style.module.scss';
import { cn } from '@/libs/utils';

interface IBaseCard extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function BaseCard({children, className, ...rest}: IBaseCard) {
  const baseClass = cn(style.base_card, className);

  return (
    <div className={baseClass}
    {...rest}
    >
      { children }
    </div>
  )
}
