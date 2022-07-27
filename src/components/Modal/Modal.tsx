import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import styles from "./Modal.module.css"

export function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={openModal}
        className={styles.openModal}
      >
        Ver mais
      </button>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        className={styles.modal}
      >
        <Dialog.Panel
          className={styles.modalContainer}
        >
          <button onClick={closeModal}>Close</button>
          <h2> Hello</h2>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}