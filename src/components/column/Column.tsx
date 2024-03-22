import styles from './Column.module.css'
import { Card } from '../card/Card'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

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
      <div className={styles.wrapper}>
      <DragDropContext>
  <Droppable droppableId="droppable">
    {(provided) => (
      <div {...provided.droppableProps} ref={provided.innerRef} className={styles.cardContainer}>
        <Draggable draggableId="cardItem1" index={0}>
          {(provided) => (
            <div
              className={styles.cardItem}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card />
            </div>
          )}
        </Draggable>
        <Draggable draggableId="cardItem2" index={1}>
          {(provided) => (
            <div
              className={styles.cardItem}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card />
            </div>
          )}
        </Draggable>
        <Draggable draggableId="cardItem3" index={2}>
          {(provided) => (
            <div
              className={styles.cardItem}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card />
            </div>
          )}
        </Draggable>
        <Draggable draggableId="cardItem4" index={3}>
          {(provided) => (
            <div
              className={styles.cardItem}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card />
            </div>
          )}
        </Draggable>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>
     </div>
    </div>
  )
}
