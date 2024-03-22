import styles from './Column.module.css'
import { Card } from '../card/Card'


type ColumnProps = {
  title: string;
  modules: string;

};

export const Column: React.FC<ColumnProps> = ({ title, modules }) => {
  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{title} <span className={styles.modules}>{modules}</span></h1>
      </div>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

