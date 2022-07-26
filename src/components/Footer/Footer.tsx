import { Heart } from "phosphor-react";
import { ButtonScrollToTop } from "../ButtonScrollToTop/ButtonScrollToTop";
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p>
        Desenvolvido por
        <a href="https://github.com/SouzaVitoria/">Vitória Souza</a>
        <Heart weight="fill" className={styles.heart} />
      </p>
      <ButtonScrollToTop />
    </footer>
  )
}