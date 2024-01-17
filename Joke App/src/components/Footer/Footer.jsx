import style from "./Footer.module.scss";

export function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
             <p>© {currentYear} Tanja Hedemann Nielsen. All rights reserved.</p>
    </footer>
  )
}

