import styles from './App.module.css'

import { Board } from "./board/Board"

function App() {
  
  return (
    <div className={styles.app}>
      <Board />
    </div>
  )
}

export default App