import "./global.css"
import { Header } from "./components/Header/Header"
import { Form } from "./components/Form/Form"
import { Todos } from "./components/Todos/Todos"

export function App() {
  return (
    <div>
      <Header />
      <Form />
      <Todos />
    </div>
  )
}
