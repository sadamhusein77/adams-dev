import { cn } from '@/libs/utils';
import { lottieLoader } from '@/assets';
import Lottie from "lottie-react";
import style from './style.module.scss';

type TLoader = {
  background?: 'solid' | 'transparent' | 'overlay' | 'none';
  isFullScreen?: boolean;
  customSize?: string;
  className?: string;
};

export const Loader = ({
  background = 'solid',
  isFullScreen = true,
  customSize = 'h-10 w-10',
  className = ''
}: TLoader) => {
  let loaderBackgroundClass = '';
  switch (background) {
    case 'solid':
      loaderBackgroundClass = style['loader--solid'];
      break;
    case 'transparent':
      loaderBackgroundClass = style['loader--transparent'];
      break;
    case 'overlay':
      loaderBackgroundClass = style['loader--overlay'];
      break;
  }

  const loaderHeightClass = isFullScreen && style['loader--fullscreen'];

  return (
    <div
      className={cn(
        style.loader,
        loaderBackgroundClass,
        loaderHeightClass,
        className
      )}>
      <Lottie animationData={lottieLoader} loop={true} className='w-40 h-40' />
    </div>
  );
};
