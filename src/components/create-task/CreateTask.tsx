import styles from './CreateTask.module.css'

export const CreateTask = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
                        // value={recipe.name}
                        // onChange={(e) => setResipe({...recipe, name: e.target.value})}
                    />
                </label>
                <label>
                    <input
                        minLength={3} 
                        className={styles.input}
                        type="text" 
                        placeholder="Описание"  
                        // value={recipe.image}
                        // onChange={(e) => setResipe({...recipe, image: e.target.value})}
                    />
                </label>
                <button className={styles.button} type="submit">
                    Сохранить
                </button>
            </form>
    </div>
  )
}
