import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './style.module.scss';
import { baseNameApp } from '@/utils/constants';
import { cn } from '@/libs/utils';

export type Anchor = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  anchor?: Anchor;
  width?: string | number; // for left/right
  height?: string | number; // for top/bottom
  closeOnBackdropClick?: boolean;
  className?: string;
  showBackdrop?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  anchor = 'right',
  width = 320,
  height = 240,
  closeOnBackdropClick = true,
  className = '',
  showBackdrop = true,
}) => {
  const mountRef = useRef<HTMLElement | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ensure we have a mount point for portal
    let mount = document.getElementById('drawer-root');
    if (!mount) {
      mount = document.createElement('div');
      mount.setAttribute('id', 'drawer-root');
      document.body.appendChild(mount);
    }
    mountRef.current = mount;

    // create element for this drawer instance
    const el = document.createElement('div');
    elRef.current = el;
    mount.appendChild(el);

    return () => {
      if (mount && el) mount.removeChild(el);
      // don't remove mount itself to avoid stomping other drawers
    };
  }, []);

  // lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [open]);

  // close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!mountRef.current || !elRef.current) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (!closeOnBackdropClick) return;
    if (e.target === e.currentTarget) onClose();
  };

  const anchorClass = {
    left: styles.left,
    right: styles.right,
    top: styles.top,
    bottom: styles.bottom,
  }[anchor];

  const sizeStyle: React.CSSProperties =
    anchor === 'left' || anchor === 'right'
      ? { width: typeof width === 'number' ? `${width}px` : width }
      : { height: typeof height === 'number' ? `${height}px` : height };
  const drawer = (
    <div className={styles.wrapper}>
      {showBackdrop && (
        <div
          className={cn(styles.backdrop, open ? styles.backdropShow : '')}
          onMouseDown={handleBackdropClick}
          role="presentation"
        />
      )}

      <aside
        className={cn(styles.drawer, anchorClass, open ? styles.open : '', className)}
        style={sizeStyle}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.header}>
          <span className={styles.header__name}>{baseNameApp}</span>
          <button
            type="button"
            aria-label="close drawer"
            className={styles.closeBtn}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </aside>
    </div>
  );

  return createPortal(drawer, elRef.current);
};

export default Drawer;