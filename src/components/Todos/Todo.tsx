import { Trash } from "phosphor-react";
import styles from "./Todo.module.css"

export function Todo() {
  return (
    <div className={`${styles.todo} ${styles.selectedTodo}`}>
      <a className={styles.selectTodo}>
        <div className={styles.checkbox}></div>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </a>

      <button className={styles.trash}>
        <Trash size={24} />
      </button>
    </div>
  )
}