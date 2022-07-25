import { FormEvent, useState } from "react"
import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css"

export function Form({ setTodo, todos }: any) {
  const [task, setTask] = useState<string>("")

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault()
    setTodo([
      ...todos,
      {
        id: 2,
        done: false,
        task
      }
    ])
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleCreateTask}
    >
      <input
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={event => setTask(event.target.value)}
      />
      <button>
        Criar
        <PlusCircle size={32} />
      </button>
    </form>
  )
}