import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export type TTimelineItem = {
  id: number;
  company: string;
  title: string;
  period?: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

type Props = {
  item: TTimelineItem;
  isLeft: boolean;
};

export default function TimelineItem({ item, isLeft }: Props) {
  return (
    <li className={styles.timelineItem}>
      {/* LEFT SIDE */}
      <div className={styles.timelineLeft}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45 }}
            className={styles.motionBlock}
          >
            <div className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.subtitle}>
                {item.company}
                {item.period ? ` · ${item.period}` : ''}
              </p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* CENTER ICON */}
      <div className={styles.iconWrapper}>
        <div className={styles.iconCircle}>
          <div className={`${styles.iconInner} ${item.color}`}>{item.icon}</div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.timelineRight}>
        <motion.div
          className={styles.mobileBlock}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45 }}
        >
          <div className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>
              {item.company}
              {item.period ? ` · ${item.period}` : ''}
            </p>
            <p className={styles.description}>{item.description}</p>
          </div>
        </motion.div>

        {!isLeft && (
          <div className="hidden md:block md:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45 }}
            >
              <div className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.subtitle}>
                  {item.company}
                  {item.period ? ` · ${item.period}` : ''}
                </p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </li>
  );
}
