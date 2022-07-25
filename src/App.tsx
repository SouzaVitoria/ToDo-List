import "./global.css"
import { Header } from "./components/Header/Header"
import { Todos } from "./components/Todos/Todos"

export function App() {
  return (
    <div>
      <Header />
      <Todos />
    </div>
  )
}
