import styles from './Column.module.css'
import { Card } from '../card/Card'
import {Droppable, Draggable} from 'react-beautiful-dnd'

type ColumnProps = {
  title: string;
  modules: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: string[];
  id: number;
};

export const Column: React.FC<ColumnProps> = ({ title, tasks, id, modules, setIsOpen }) => {
  const droppableId = String(id); // Convert the id prop to a string

  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleText}>{title} <span onClick={() => setIsOpen(true)} className={styles.modules}>{modules}</span></h1>
      </div>
      <div className={styles.wrapper}>
        <div className="column">
        <Droppable droppableId={droppableId}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              isdraggingover={snapshot.isDraggingOver ? 'true' : undefined} // Pass undefined if the condition is false
            >
              {tasks && tasks.map((task, index) => (
                <Card key={index} index={index} task={task} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        </div>
      </div>
    </div>
  );
};
