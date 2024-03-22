import styles from './Modal.module.css'


interface ModalProps {
    children: React.ReactNode
    title?: string
    onClose?: () => void
}

export const Modal = ({onClose, children}: ModalProps ) => {
  
    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose && onClose();
      }
    }
  
    return (
      <>
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.content}>
            { children }
          </div>
        </div>
      </>
    )
  }
