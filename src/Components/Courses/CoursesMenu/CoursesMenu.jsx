import style from "./Courses.module.css";
import decore from "../../../Assets/Decorations/marketing.svg";
import { NavLink } from "react-router-dom";

function coursesMenu(props) {
  if (props.userCourses !== "") {
    return (
      <div className={style.container}>
        <div>
          <div className={style.introduction}>
            {props.username + ", great day to learn something new!"}
            <div className={style.subIntroduction}>Available courses:</div>
          </div>
        </div>
        <div></div>
        <div className={style.coursesContainer}>
          {props.userCourses.map((p) => (
            <div key={p._id} className={style.courseName}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "var(--color-active)" : "white",
                })}
                to={"/courses/description"}
                onClick={() => {
                  props.setCurrentCourseName(p.courseName);
                }}
              >
                <div className={style.content}>{p.courseName}</div>
              </NavLink>
              <div className={style.img}>
                <img alt="" src={p.svgImage} />
              </div>
            </div>
          ))}
        </div>
        <div className={style.coming}>
          <div className={style.comingContent}>
            <div className={style.coming_soon}>Coming soon...</div>
            <div>
              <img src={decore} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Something went wrong</div>;
  }
}
export default coursesMenu;
