import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import styles from './style.module.scss';
import { cn } from '@/libs/utils';

export type JourneyStep = {
  id: number;
  title: string;
  institution: string;
  year: string;
  description: string;
};

interface IStepper {
    journey: JourneyStep[];
}


export default function Stepper({ journey }: IStepper) {
  const [active, setActive] = useState<number | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number } | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleClick = (stepId: number, el: HTMLDivElement | null, isAbove: boolean) => {
    if (active === stepId) {
      setActive(null);
      setPopupPos(null);
    } else if (el) {
      const rect = el.getBoundingClientRect();
      setActive(stepId);
      setPopupPos({
        x: rect.left + rect.width / 2,
        y: isAbove ? rect.top - 150 : rect.bottom + 20,
      });
    }
  };

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setActive(null);
        setPopupPos(null);
      }
    }
    if (active) document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [active]);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent | TouchEvent) {
      if (active && mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    }
    if (active) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [active]);

  return (
    <div className={styles.container}>
      {/* Desktop */}
      <div className={styles.desktopWrapper}>
        <button onClick={() => scrollBy(-300)} className={styles.arrowLeft}>
          <ChevronLeft className={styles.arrowIcon} />
        </button>
        <button onClick={() => scrollBy(300)} className={styles.arrowRight}>
          <ChevronRight className={styles.arrowIcon} />
        </button>

        <div ref={containerRef} className={styles.scrollContainer}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -journey.length * 250, right: 0 }}
            className={styles.dragWrapper}
          >
            <div className={styles.pathLine} />

            {journey.map((step, i) => {
              const isAbove = i % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`${styles.stepWrapper} ${isAbove ? styles.stepAbove : styles.stepBelow}`}
                >
                  <div
                    className={`${styles.dashedLine} ${isAbove ? styles.lineAbove : styles.lineBelow}`}
                  />
                  <motion.div
                    className={cn(styles.step, 'group')}
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => handleClick(step.id, e.currentTarget, isAbove)}
                  >
                    <div className={styles.iconCircle}>
                      <GraduationCap className={styles.icon} />
                    </div>
                    <span className={styles.stepTitle}>{step.title}</span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      {active &&
        popupPos &&
        createPortal(
          <AnimatePresence>
            <motion.div
              key={active}
              ref={popupRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={styles.popup}
              style={{ left: popupPos.x, top: popupPos.y, transform: 'translateX(-50%)' }}
            >
              <h3 className={styles.popupTitle}>{journey.find((j) => j.id === active)?.institution}</h3>
              <p className={styles.popupYear}>{journey.find((j) => j.id === active)?.year}</p>
              <p className={styles.popupDesc}>{journey.find((j) => j.id === active)?.description}</p>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

      {/* Mobile */}
      <div ref={mobileRef} className={styles.mobileWrapper}>
        <div className={styles.mobileLine} />
        <div className={styles.mobileSteps}>
          {journey.map((step) => (
            <div
              key={step.id}
              className={styles.mobileStep}
              onClick={() => setActive(step.id === active ? null : step.id)}
            >
              <div className={styles.iconCircleMobile}>
                <GraduationCap className={styles.iconMobile} />
              </div>
              <div>
                <h3 className={styles.mobileTitle}>{step.title}</h3>
                <p className={styles.mobileYear}>{step.year}</p>
                <AnimatePresence>
                  {active === step.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className={styles.mobilePopup}
                    >
                      <p className={styles.mobileInstitution}>{step.institution}</p>
                      <p className={styles.mobileDesc}>{step.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}