import { Draggable } from 'react-beautiful-dnd'
import { ITask } from '../../types/task.types';
import styles from './Card.module.css'

export const Card = ({ task, index }: ITask) => {
  return (
    <Draggable
      draggableId={`${task.id}`}
      key={task.id}
      index={index}
      renderClone={(provided, snapshot, rubric) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* Your cloned element */}
        </div>
      )}
    >
      {(provided, snapshot) => (
        <div
          className={styles.card}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isdraggingover={snapshot.isDragging ? 'true' : undefined}
        >
          <div>
              <div className={styles.cardItem}>{task.title}</div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};
