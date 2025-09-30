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
      <footer className="max-w-6xl mx-auto my-12 text-center text-sm text-gray-500">
        Made with ❤️
      </footer>
      <Footer />
    </div>
  );
}
