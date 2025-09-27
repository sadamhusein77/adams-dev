import { Skeleton } from '@/components/ui/skeleton/skeleton';
import style from './style.module.scss';
import BaseCard from '@/components/ui/card';

export default function FeatureSkeleton() {
  return (
    <div className={style.feature_skeleton}>
        <BaseCard className={style.feature_skeleton__wrapper}>
            <Skeleton className={style.feature_skeleton__img} />
            <div className={style.feature_skeleton__content}>
                <Skeleton className={style.feature_skeleton__content__title} />
                <Skeleton className={style.feature_skeleton__content__desc} />
            </div>
        </BaseCard>
    </div>
  )
}
