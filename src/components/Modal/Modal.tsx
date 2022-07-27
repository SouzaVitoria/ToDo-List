import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CheckCircle, PlusCircle, X, Flag } from 'phosphor-react'
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { ModalProps } from '../../typings/typings'
import styles from "./Modal.module.css"

export function Modal({ todo }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const createdAt = format(new Date(todo.createdAt), "dd'/'LL'/'yyyy' às 'HH':'mm'h'", {
    locale: ptBR
  })
  const completedDateFormatted = todo.done && format(new Date(todo.completedDate), "dd'/'LL'/'yyyy' às 'HH':'mm'h'", {
    locale: ptBR
  })

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
          <button
            className={styles.closeModal}
            onClick={closeModal}
          >
            <X size={20} color="#E25858" />
          </button>
          <div className={styles.contentModal}>
            <div className={styles.modalDate}>
              <p>
                <PlusCircle size={20} weight="fill" color="#4EA8DE" />
                <span>
                  <strong> Criada em: </strong> {createdAt}
                </span>
              </p>
              <p>
                {
                  completedDateFormatted ? (
                    <>
                      <CheckCircle size={20} weight="fill" color="#0fbf15" />
                      <span>
                        <strong> Concluída em: </strong> {completedDateFormatted}
                      </span>
                    </>
                  ) : (
                    <>
                      <Flag size={20} weight="fill" color="#E25858" />
                      <span>
                        <strong> A concluir </strong>
                      </span>
                    </>
                  )
                }

              </p>
            </div>
            <p className={styles.descriptionModal}>
              <strong> A fazer: </strong>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}