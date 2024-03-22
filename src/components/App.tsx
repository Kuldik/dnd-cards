import { Column } from "./column/Column"
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.app}>
     <Column title={"Нужно"} span={"+"}/>
     <Column title={"В работе"} span={""} />
     <Column title={"Выполнено"} span={""} />
    </div>
  )
}

export default App
