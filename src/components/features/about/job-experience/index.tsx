import InteractiveTimeline from '@/components/ui/timeline';
import styles from './style.module.scss';
import { timelineData } from './timelineData';

export default function JosbExperience() {
  
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Job Experiences</h2>
      <InteractiveTimeline data={timelineData} />
    </div>
  )
}
