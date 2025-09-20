import { icoMenu, IconWeb } from '@/assets';
import Drawer from '../drawer';
import { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/use-mediaQuery';
import Button from '../button';
import { cn } from '@/libs/utils';
import Navbar, { type INavItem } from '../navbar';
import { baseNameApp } from '@/utils/constants';
import style from './style.module.scss';

const HeaderLogo = () => {
  return (
    <div className={style.header__logo}>
      <img src={IconWeb} alt="ico_header" className={style.header__logo__img} />
      <span className={style.header__logo__name}>{baseNameApp}</span>
    </div>
  );
};

const DrawerMenu = ({ navItems }: { navItems: INavItem[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={cn(style.header__btn_drawer_menu)}
        variant="text"
      >
        <img src={icoMenu} alt="ico-menu" />
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
        width={'70%'}
      >
        <Navbar navItems={navItems} type="Vertical" />
      </Drawer>
    </>
  );
};

export default function Header() {
  const { lg } = useMediaQuery();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: INavItem[] = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/project', label: 'Project' },
    { path: '/certification', label: 'Certification' }
  ];

  return (
    <div className={cn(style.header, isScrolled && style.header__glass)}>
      {!lg && <DrawerMenu navItems={navItems} />}
      <HeaderLogo />
      {lg && <Navbar navItems={navItems} />}
    </div>
  );
}
