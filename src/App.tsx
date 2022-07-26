import "./global.css"
import { Header } from "./components/Header/Header"
import { Todos } from "./components/Todos/Todos"
import { Footer } from "./components/Footer/Footer"

export function App() {
  return (
    <div>
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}
