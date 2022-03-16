import style from "./Header.module.css";

import { NavLink } from "react-router-dom";

function NameHeader(props) {
  return (
    <div className={style.name_header}>
      {props.isAuth ? <div>{props.username}</div> : <div></div>}
    </div>
  );
}
export default NameHeader;
