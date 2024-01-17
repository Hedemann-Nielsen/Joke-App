import { FaGear } from "react-icons/fa6";

import style from "./Header.module.scss";

export function Header() {
  return (
    <>
    <div className={style.header}>
        <h1>random jokes</h1>
        <FaGear />
    </div>
    </>
  )
}
