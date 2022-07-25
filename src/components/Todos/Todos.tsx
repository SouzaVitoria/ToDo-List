import { useState } from "react";
import { ClipboardText } from "phosphor-react";
import { ITodo } from "../../typings/typings";
import { Form } from "../Form/Form";
import { Todo } from "./Todo";
import styles from "./Todos.module.css"

const todosData = [
  {
    id: 1,
    done: false,
    task: "Estudar Context API"
  },
  {
    id: 2,
    done: true,
    task: "Finalizar a aula 1 da trilha do Ignite de 2022"
  }
]

export function Todos() {
  const [todos, setTodos] = useState<ITodo[]>(todosData)

  return (
    <div className="container">
      <Form todos={todos} setTodo={setTodos} />
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
          {todos.map(() => <Todo />)}
        </div>
      </div>
    </div>
  )
}