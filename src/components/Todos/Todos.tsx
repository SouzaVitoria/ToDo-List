import { ClipboardText } from "phosphor-react";

export function Todos() {
  return (
    <div className="container">
      <div className="summaryTodos">
        <div>
          Tarefas criadas <strong> 0 </strong>
        </div>
        <div>
          Concluídas <strong> 0 </strong>
        </div>
      </div>

      <div className="nothingToDo">
        <ClipboardText size={56} />
        <div className="messages">
          <strong> Você ainda não tem tarefas cadastradas </strong>
          <p> Crie tarefas e organize seus itens a fazer </p>
        </div>
      </div>
    </div>
  )
}