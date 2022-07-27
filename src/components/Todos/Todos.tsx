import { useEffect, useState } from "react";
import { ClipboardText } from "phosphor-react";
import { ITask } from "../../typings/typings";
import { Form } from "../Form/Form";
import { Task } from "./Task";
import styles from "./Todos.module.css"


export function Todos() {
  const getTask = localStorage.getItem("To Do List") || "[]"
  const tasksData = JSON.parse(getTask)
  const [tasks, setTasks] = useState<ITask[]>(tasksData)

  const handleCompletedTodo = (id: number): void => {
    const updateTask: ITask[] = tasks.map((task: ITask) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
          completedDate: new Date()
        }
      }
      return task
    })

    setTasks(updateTask)
    dataLocalStorage(updateTask)
  }

  const handleDeletedTodo = (id: number): void => {
    const updateTask: ITask[] = tasks.filter((task: ITask) => task.id !== id)
    setTasks(updateTask)
    dataLocalStorage(updateTask)
  }

  const completedTasks: number = tasks.reduce((previousValue: number, currentValue: ITask): number => {
    if (currentValue.done) {
      previousValue++
    }
    return previousValue
  }, 0)

  const dataLocalStorage = (data: ITask[]): void => {
    localStorage.setItem("To Do List", JSON.stringify(data))
  }

  return (
    <div className="container">
      <Form
        todos={tasks}
        setTodo={setTasks}
        onDataLocalStorage={dataLocalStorage}
      />
      <div className={styles.todos}>
        <div className={styles.summaryTodos}>
          <p>
            Tarefas criadas <strong> {tasks.length} </strong>
          </p>
          <p>
            Concluídas <strong> {tasks.length === 0 ? "0 de 0" : `${completedTasks} de ${tasks.length}`} </strong>
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