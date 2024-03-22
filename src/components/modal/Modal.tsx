import styles from './Modal.module.css'
import { CreateTask } from "../create-task/CreateTask"

interface ModalProps {
    children: React.ReactNode
    title?: string
    onClose?: () => void
}

export const Modal = ({onClose}: ModalProps ) => {

    
    
  return (
    <>
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.content}>
                <CreateTask/>
            </div>
        </div>
    </>
        
  )
}
