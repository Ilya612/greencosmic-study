import style from "./Main.module.css";

import Profile from "../../../Assets/Profile/Profile.jsx";
import { NavLink } from "react-router-dom";
function NameMain(props) {
  return (
    <div className={style.name_main}>
      {props.isAuth ? (
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "var(--color-active)" : "black",
          })}
          to="/profile"
        >
          <div className={style.button}>
            <Profile />
            <div className={style.username}>{props.username}</div>
          </div>
        </NavLink>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default NameMain;
