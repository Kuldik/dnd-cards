import { Column } from "./column/Column"
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.app}>
     <Column title={"Нужно"}/>
     <Column title={"В работе"}/>
     <Column title={"Выполнено"}/>
</div>
  )
}

export default App
