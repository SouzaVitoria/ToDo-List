import { Trash } from "phosphor-react";
import { TaskProps } from "../../typings/typings";
import { Modal } from "../Modal/Modal";
import styles from "./Task.module.css"

export function Task({ todo, onCompletedTodo, onDeletedTask }: TaskProps) {
  return (
    <div className={`${styles.todo} ${todo.done ? styles.selectedTodo : ""}`}>
      <div className={styles.textContainer}>
        <a
          className={styles.link}
          onClick={() => onCompletedTodo(todo.id)}
        >
          <div className={styles.checkbox}></div>
          <p>
            {todo.task}
          </p>
        </a>
        <Modal />
      </div>

      <button
        className={styles.trash}
        onClick={() => onDeletedTask(todo.id)}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}