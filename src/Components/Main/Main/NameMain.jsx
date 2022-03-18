import style from "./Main.module.css";

import Profile from "../../../Assets/Profile/profile.svg";
import { NavLink } from "react-router-dom";
function NameMain(props) {
  return (
    <div className={style.name_main}>
      {localStorage.getItem("user").isAuth ? (
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "var(--color-active)" : "black",
          })}
          to="/profile"
        >
          <div className={style.username}>{props.username}</div>
          <div className={style.button}>
            <img className={style.profileImg} src={Profile} alt="" />
          </div>
        </NavLink>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default NameMain;
