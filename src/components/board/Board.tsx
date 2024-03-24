import styles from './Board.module.css'
import { Column } from '../column/Column'
import { useState } from 'react'
import { Modal } from '../modal/Modal'
import { CreateTask } from "../create-task/CreateTask"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';



export const Board = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <DragDropContext>
        <div className={styles.board}></div>
        <Column title={"Нужно"} modules={"+"} setIsOpen={setIsOpen} />
        <Column title={"В работе"} modules={""} setIsOpen={setIsOpen} />
        <Column title={"Выполнено"} modules={""} setIsOpen={setIsOpen} />
        {isOpen && <Modal onClose={() => setIsOpen(false)}>
          <CreateTask />
        </Modal>}
      </DragDropContext>
    </>
  )
}
