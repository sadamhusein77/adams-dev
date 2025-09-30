import { imgSadamPhoto, imgWave } from '@/assets';
import Chip from '@/components/ui/chip';
import Button from '@/components/ui/button';
import { ArrowRightIcon } from '@/assets/svgs/ico_chevron-right';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import style from './style.module.scss';

const ProfilePhoto = () => {
  return (
    <motion.div
      className={style.banner__photo}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={style.banner__photo__wrapper}>
        <img
          src={imgSadamPhoto}
          alt="img-photo"
          className={style.banner__photo__wrapper__img}
        />
      </div>
      <img src={imgWave} alt="img-wave" className={style.banner__photo__bg} />
    </motion.div>
  );
};

const GreetingCard = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={style.banner__greeting}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h4 className={style.banner__greeting__title}>Greetings!</h4>
      <p className={style.banner__greeting__desc}>
        I'm a dedicated Front-End Developer with over 4 years of hands-on
        experience crafting dynamic and responsive user interfaces. My expertise
        lies in the <span className="text-black">React.js</span> ecosystem,
        where I specialize in building{' '}
        <span className="text-black">efficient</span>,{' '}
        <span className="text-black">scalable</span>, and visually appealing web
        applications. I am passionate about creating seamless user experiences
        and translating complex designs into{' '}
        <span className="text-black">clean, maintainable code</span>.
      </p>
      <Button
        className={style.banner__greeting__cta}
        onClick={() => navigate('/project')}
      >
        <span>Explore Projects</span>
        <ArrowRightIcon color="white" />
      </Button>
    </motion.div>
  );
};

export default function Banner() {
  return (
    <section className={style.banner}>
      <ProfilePhoto />
      <div className={style.banner__info}>
        <Chip className={style.banner__info__name}>Sadam Husein</Chip>
        <span className={style.banner__info__job}>Front-end Web Developer</span>
      </div>
      <GreetingCard />
    </section>
  );
}
