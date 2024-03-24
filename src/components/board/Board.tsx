import styles from './Board.module.css'
import { Column } from '../column/Column'
import { useState, useEffect } from 'react'
import { Modal } from '../modal/Modal'
import { CreateTask } from "../create-task/CreateTask"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';



export const Board = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inProcess, setInProcess] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [inReview, setInReview] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5")
          .then((response) => response.json())
          .then((json) => {
              setInProcess(json.filter((task) => task.inProcess));
              setIncomplete(json.filter((task) => !task.inProcess));
          });
  }, []);

  const handleDragEnd = (result) => {
      const { destination, source, draggableId } = result;

      if (!destination || source.droppableId === destination.droppableId) return;

      deletePreviousState(source.droppableId, draggableId);

      const task = findItemById(draggableId, [...incomplete, ...inProcess, ...inReview, ...backlog]);

      setNewState(destination.droppableId, task);

  };

  function deletePreviousState(sourceDroppableId, taskId) {
      switch (sourceDroppableId) {
          case "1":
              setIncomplete(removeItemById(taskId, incomplete));
              break;
          case "2":
              setInProcess(removeItemById(taskId, inProcess));
              break;
          case "3":
              setInReview(removeItemById(taskId, inReview));
              break;
      }

  }
  function setNewState(destinationDroppableId, task) {
      let updatedTask;
      switch (destinationDroppableId) {
          case "1":   // TO DO
              updatedTask = { ...task, inProcess: false };
              setIncomplete([updatedTask, ...incomplete]);
              break;
          case "2":  // IN PROGRESS
              updatedTask = { ...task, inProcess: true };
              setInProcess([updatedTask, ...inProcess]);
              break;
          case "3":  // DONE
              updatedTask = { ...task, InProcess: false };
              setInReview([updatedTask, ...inReview]);
              break;
      }
  }
  function findItemById(id, array) {
      return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
      return array.filter((item) => item.id != id);
  }

  return (
    <>
      <DragDropContext>
        <div className={styles.board}></div>
        <Column title={"Нужно"} modules={"+"} tasks={incomplete} setIsOpen={setIsOpen} />
        <Column title={"В работе"} modules={""} tasks={inProcess} setIsOpen={setIsOpen} />
        <Column title={"Выполнено"} modules={""} tasks={inReview} setIsOpen={setIsOpen} />
        {isOpen && <Modal onClose={() => setIsOpen(false)}>
          <CreateTask />
        </Modal>}
      </DragDropContext>
    </>
  )
}
