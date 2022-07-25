import { Trash } from "phosphor-react";
import styles from "./Todo.module.css"

export function Todo({ todo }: any) {
  return (
    <div className={`${styles.todo} ${styles.selectedTodo}`}>
      <a className={styles.selectTodo}>
        <div className={styles.checkbox}></div>
        <p>
          {todo.task}
        </p>
      </a>

      <button className={styles.trash}>
        <Trash size={24} />
      </button>
    </div>
  )
}