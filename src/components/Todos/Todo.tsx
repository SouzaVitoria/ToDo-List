import { Trash } from "phosphor-react";
import { TaskProps } from "../../typings/typings";
import styles from "./Todo.module.css"

export function Todo({ todo, onCheckedTodo }: TaskProps) {
  return (
    <div className={`${styles.todo} ${todo.done ? styles.selectedTodo : ""}`}>
      <a
        className={styles.selectTodo}
        onClick={() => onCheckedTodo(todo.id)}
      >
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