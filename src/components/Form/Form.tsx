import { FormEvent, useState } from "react"
import { PlusCircle } from "phosphor-react";
import { v4 as uuid } from 'uuid';
import styles from "./Form.module.css"

export function Form({ setTodo, todos, onDataLocalStorage }: any) {
  const [task, setTask] = useState<string>("")

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault()

    const data = [
      ...todos,
      {
        id: uuid(),
        done: false,
        task,
        createdAt: new Date()
      }
    ]

    setTodo(data)
    onDataLocalStorage(data)
    setTask("")
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
      <button title="Criar nova tarefa">
        Criar
        <PlusCircle size={32} />
      </button>
    </form>
  )
}