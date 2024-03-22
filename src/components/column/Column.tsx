import styles from './Column.module.css'
import { Card } from '../card/Card'


type ColumnProps = {
  title: string;
  span: string;
};

export const Column: React.FC<ColumnProps> = ({ title }) => {
  return (
    <div className={styles.column}>
      <div>
        <h1 className={styles.titleText}>{title} {<span></span>}</h1>
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

