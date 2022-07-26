import { ArrowCircleUp } from "phosphor-react"
import styles from "./ButtonScrollToTop.module.css"

export function ButtonScrollToTop() {

  const handleBackToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button
      className={styles.backToTop}
      onClick={handleBackToTop}
    >
      <ArrowCircleUp size={50} />
    </button>
  )
}