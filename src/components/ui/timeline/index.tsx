import type { TTimelineItem } from './item';
import styles from './style.module.scss';
import TimelineItem from './item';

interface IDataTimeline {
    data: TTimelineItem[]
}

export default function InteractiveTimeline({ data }: IDataTimeline) {
    if(!data) return null;
  return (
      <div className={styles.wrapper}>
        <div className={styles.line} />
        <ul className={styles.list}>
          {data.map((item, index) => (
            <TimelineItem key={item.id} item={item} isLeft={index % 2 === 0} />
          ))}
        </ul>
      </div>
  );
}