import styles from './Column.module.css'
import { Card } from '../card/Card'

type ColumnProps = {
  title: string;
  modules: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Column: React.FC<ColumnProps> = ({ title, modules, setIsOpen }) => {
  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{title} <span onClick={() => setIsOpen(true)} className={styles.modules}>{modules}</span></h1>
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
