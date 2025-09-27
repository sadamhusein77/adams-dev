import styles from './style.module.scss';
import Stepper from '@/components/ui/stepper';
import { journey } from './journeyData';
export default function Education() {
  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>My Education Journey</h2>
        <Stepper journey={journey} />
    </div>
  )
}
