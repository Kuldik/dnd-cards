import styles from './App.module.css'
import { Modal } from "./modal/Modal"
import { CreateTask } from "./create-task/CreateTask"
import { useState } from 'react'
import { Column } from "./column/Column"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  
  return (
    <div className={styles.app}>
      <Column title={"Нужно"} modules={"+"} setIsOpen={setIsOpen} />
      <Column title={"В работе"} modules={""} setIsOpen={setIsOpen} />
      <Column title={"Выполнено"} modules={""} setIsOpen={setIsOpen} />
      {isOpen && <Modal onClose={() => setIsOpen(false)}>
        <CreateTask />
      </Modal>}
    </div>
  )
}

export default App