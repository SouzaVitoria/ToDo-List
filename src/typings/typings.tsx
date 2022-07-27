export interface ITask {
  id: number
  done: boolean
  task: string
  createdAt: Date
}

export interface TaskProps {
  todo: ITask
  onCompletedTodo: (id: number) => void
  onDeletedTask: (id: number) => void
}

export interface ModalProps {
  todo: ITask
}
