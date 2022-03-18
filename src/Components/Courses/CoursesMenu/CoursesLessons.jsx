import style from "./Courses.module.css";
import { Link } from "react-router-dom";

///course/steps
function CoursesLessons(props) {
  return (
    <div>
      <div>
        <div className={style.introduction}>
          {localStorage.getItem("user").username +
            ", great day to learn something new!"}
          <div className={style.subIntroduction}>Choose lesson</div>
        </div>
      </div>
      <div></div>
      <div>
        {props.lessons ? (
          props.lessons.map((p) => (
            <div key={p._id} className={style.courseName}>
              <div
                onClick={() => {
                  props.setCurrentLessonName(p.lessonName);
                }}
              >
                <Link to={"/courses/lessons/steps"}>
                  <div className={style.content}>{p.lessonName}</div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>Привет</div>
        )}
      </div>
    </div>
  );
}
export default CoursesLessons;
