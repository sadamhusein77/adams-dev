import Banner from '@/components/features/landing/banner';
import style from './style.module.scss';
import FeatureWork from '@/components/features/landing/feature-work';
import MySkills from '@/components/features/landing/skills';

export default function Landing() {
  return (
    <div className={style.wrapper}>
      <Banner />
      <MySkills />
      <FeatureWork />
    </div>  
    )
}
