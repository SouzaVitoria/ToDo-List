export interface ITask {
  id: number
  done: boolean
  task: string
}

export interface TaskProps {
  todo: ITask
  onCheckedTodo: (id: number) => void
}
