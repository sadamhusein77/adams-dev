import Button from '../button'
import { icoReload } from '@/assets'

import style from './style.module.scss';
import { cn } from '@/libs/utils';
import { useT } from '@/hooks/use-t';

interface IReloadCard {
  className?: string;
  onReload?: () => void;
}

export default function ReloadCard({ className, onReload }: IReloadCard) {
  const { t } = useT('commons.error');
  const baseClass = cn(style.reload_card, className)
  return (
    <div className={baseClass}>
      <div className={style.reload_card__content}>
        <span className={style.reload_card__content__title}>{t('title')}</span>
        <span className={style.reload_card__content__desc}>{t('subtitle')}</span>
      </div>
      <Button label="Reload" className={style.reload_card__action} onClick={onReload}>
        <img src={icoReload} alt="ico_reload" className={style.reload_card__action__ico} />
      </Button>
    </div>
  )
}
