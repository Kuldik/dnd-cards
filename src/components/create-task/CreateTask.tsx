import styles from './CreateTask.module.css'
import { useState } from 'react'

// interface ICreateTaskProps {
//     onAddTask: () => void
// }

export const CreateTask = () => {

    const [valueName, setValueName] = useState<string>("")
    const [valueDescription, setValueDescription] = useState<string>("")
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        if (valueName.trim().length && valueDescription.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
    }


  return (
    <div>
        <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Create new Task</h1>
                <label>
                    <input
                        minLength={3}
                        type="text" 
                        className={styles.input}
                        placeholder="Название" 
                        value={valueName}
                        onChange={(e) => setValueName(e.target.value)}
                    />
                </label>
                {error && <div className={styles.error}>{error}</div>}

                <label>
                    <input
                        minLength={3} 
                        className={styles.input}
                        type="text" 
                        placeholder="Описание"  
                        value={valueDescription}
                        onChange={(e) => setValueDescription(e.target.value)} 
                    />
                </label>
                {error && <div className={styles.error}>{error}</div>}
                <button className={styles.button} type="submit">
                    Сохранить
                </button>
            </form>
    </div>
  )
}
