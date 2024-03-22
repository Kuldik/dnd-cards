import { Column } from "./column/Column"
import styles from './App.module.css'
import { Modal } from "./modal/Modal"

function App() {

  return (
    <div className={styles.app}>
     <Column title={"Нужно"} modules={"+"}/>
     <Column title={"В работе"} modules={""} />
     <Column title={"Выполнено"} modules={""} />

     <Modal children={"Create new Task"}/>
    </div>
  )
}

export default App
