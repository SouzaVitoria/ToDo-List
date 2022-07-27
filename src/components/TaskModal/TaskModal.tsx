import { useState } from "react";
import Modal from 'react-modal';
import styles from "./TaskModal.module.css"

export function TaskModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenAndCloseModal = () => setIsOpen(!modalIsOpen)

  return (
    <>
      <button
        className={styles.openModal}
        onClick={handleOpenAndCloseModal}
      >
        Ver mais...
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleOpenAndCloseModal}
      >
        <button onClick={handleOpenAndCloseModal}>close</button>
      </Modal>
    </>
  )
}