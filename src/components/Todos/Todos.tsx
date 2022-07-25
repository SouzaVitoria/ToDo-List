import { ClipboardText } from "phosphor-react";
import { Todo } from "./Todo";
import styles from "./Todos.module.css"

const todos = [1, 2]

export function Todos() {
  return (
    <div className="container">
      <div className={styles.todos}>
        <div className={styles.summaryTodos}>
          <p>
            Tarefas criadas <strong> 0 </strong>
          </p>
          <p>
            Concluídas <strong> 0 </strong>
          </p>
        </div>

        <div className={styles.nothingToDo}>
          <ClipboardText size={56} color="#333333" />
          <div className={styles.messages}>
            <strong> Você ainda não tem tarefas cadastradas </strong>
            <p> Crie tarefas e organize seus itens a fazer </p>
          </div>
        </div>

        <div className={styles.todosContent}>
          {
            todos.map(todo => {
              return <Todo />
            })
          }

        </div>
      </div>
    </div>
  )
}