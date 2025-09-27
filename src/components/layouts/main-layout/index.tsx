import { Outlet } from 'react-router';
import style from './style.module.scss';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function MainLayout() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapper__body}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
