import { Trash } from "phosphor-react";
import { TaskProps } from "../../typings/typings";
import styles from "./Task.module.css"

export function Task({ todo, onCompletedTodo, onDeletedTask }: TaskProps) {
  return (
    <div className={`${styles.todo} ${todo.done ? styles.selectedTodo : ""}`}>
      <a
        className={styles.selectTodo}
        onClick={() => onCompletedTodo(todo.id)}
      >
        <div className={styles.checkbox}></div>
        <p>
          {todo.task}
        </p>
      </a>

      <button
        className={styles.trash}
        onClick={() => onDeletedTask(todo.id)}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}