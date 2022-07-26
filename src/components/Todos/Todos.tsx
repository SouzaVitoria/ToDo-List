import { useEffect, useState } from "react";
import { ClipboardText } from "phosphor-react";
import { ITask } from "../../typings/typings";
import { Form } from "../Form/Form";
import { Task } from "./Task";
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
  const [tasks, setTasks] = useState<ITask[]>(todosData)
  const [completedTasks, setCompletedTasks] = useState<number>(0)

  const handleCompletedTodo = (id: number) => {
    const updateTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    })

    setTasks(updateTask)
  }

  const handleDeletedTodo = (id: number) => {
    const updateTask = tasks.filter(task => task.id !== id)
    setTasks(updateTask)
  }

  useEffect(() => {
    const completedTask = tasks.reduce((previousValue, currentValue) => {
      if (currentValue.done) {
        previousValue++
      }
      return previousValue
    }, 0)
    setCompletedTasks(completedTask)
  }, tasks)


  return (
    <div className="container">
      <Form todos={tasks} setTodo={setTasks} />
      <div className={styles.todos}>
        <div className={styles.summaryTodos}>
          <p>
            Tarefas criadas <strong> {tasks.length} </strong>
          </p>
          <p>
            Concluídas <strong> {completedTasks} de {tasks.length} </strong>
          </p>
        </div>

        {
          tasks.length > 0 ? (
            <div className={styles.todosContent}>
              {
                tasks.map((task: ITask) => {
                  return (
                    <Task
                      key={task.id}
                      todo={task}
                      onCompletedTodo={handleCompletedTodo}
                      onDeletedTask={handleDeletedTodo}
                    />
                  )
                })
              }
            </div>
          ) : (
            <div className={styles.nothingToDo}>
              <ClipboardText size={56} color="#333333" />
              <div className={styles.messages}>
                <strong> Você ainda não tem tarefas cadastradas </strong>
                <p> Crie tarefas e organize seus itens a fazer </p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}