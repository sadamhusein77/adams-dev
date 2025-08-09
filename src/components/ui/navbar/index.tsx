import { NavLink } from 'react-router-dom';
import style from './style.module.scss';
import { cn } from '@/libs/utils';

export interface INavItem {
  path: string;
  label: string;
}

interface INavbar {
    type?: 'Horizontal' | 'Vertical',
    navItems: INavItem[]
}

export default function Navbar({ navItems, type = 'Horizontal' }: INavbar) {
    if(!navItems) return;
  return (
    <nav className={style.navbar}>
      <ul className={cn(style.navList, type === 'Vertical' ? style.navListVertical : '')}>
        {navItems.map((item) => (
          <li key={item.path} className={style.navItem}>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.active : ''}`
              }
            >
              {item.label}
              {/** Active indicator */}
              <span className={style.indicator} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
