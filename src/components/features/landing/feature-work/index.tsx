import BaseCard from '@/components/ui/card';
import Button from '@/components/ui/button';
import { icoEyeTracking } from '@/assets';
import { useNavigate } from 'react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { QUERY_KEYS } from '@/utils/constants';
import { projectUsecase } from '@/core/usecases/project';
import FeatureSkeleton from './skeleton';
import style from './style.module.scss';
import type { ProjectDomain } from '@/core/entities/domains/project.domain';
import { motion } from 'framer-motion';

interface IFeatureImg {
  url?: string;
  img?: string;
  title?: string;
}

const FeatureImg = ({ url = '/404', img, title }: IFeatureImg) => {
  const navigate = useNavigate();

  function handleClick() {
    if (!url) return;
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  }

  return (
    <div className={style.feature_work__img}>
      <img
        src={img}
        alt={title || 'feature-image'}
        className={style.feature_work__img__item}
      />
      <Button
        className={style.feature_work__img__btn}
        onClick={handleClick}
        variant="text"
      >
        <img src={icoEyeTracking} alt="see project" />
      </Button>
    </div>
  );
};

interface IFeatureDesc {
  title?: string;
  subtitle?: string;
  tech?: string;
  duration?: string;
}

const FeatureDesc = ({ title, subtitle, tech, duration }: IFeatureDesc) => {
  return (
    <div className={style.feature_work__desc}>
      <div className={style.feature_work__desc__wrapper}>
        <h4 className={style.feature_work__desc__title}>{title}</h4>
        <span className={style.feature_work__desc__duration}>{duration}</span>
      </div>
      <p className={style.feature_work__desc__subtitle}>{subtitle}</p>
      <p className={style.feature_work__desc__tech}>{tech}</p>
    </div>
  );
};

export default function FeatureWork() {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.landing.featureWork],
    queryFn: () => projectUsecase.execute(),
  });

  const res = data.presenter.data;

  return (
    <Suspense fallback={<FeatureSkeleton />}>
      <section className={style.feature_work}>
        <motion.h3
          className={style.feature_work__heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✨ Featured Projects
        </motion.h3>

        <div className={style.feature_work__grid}>
          {res.map(
            (
              { id, description, name, duration, url, thumbnail, techStack }: ProjectDomain,
              i: number
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <BaseCard className={style.feature_work__card}>
                  <FeatureImg img={thumbnail} url={url} title={name} />
                  <FeatureDesc
                    title={name}
                    subtitle={description}
                    duration={duration}
                    tech={techStack}
                  />
                </BaseCard>
              </motion.div>
            )
          )}
        </div>
      </section>
    </Suspense>
  );
}
