import style from "./Main.module.css";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
function ProfileMain(props) {
  function change(lessonName) {
    props.setCurrentLessonName(lessonName);
  }
  return (
    <div className={style.profile_main}>
      <div className={style.fixed}>
        <div className={style.fixed_fixed}>
          <div className={style.title}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "var(--color-active)" : "white",
              })}
              to={"/courses"}
            >
              <div>GreenCosmic Study</div>
            </NavLink>
          </div>
          {props.isAuth ? (
            <div className={style.buttons}>
              <div>
                <div className={style.Nav}>Current Course:</div>
                <div className={style.button}>
                  {props.currentCourseName !== "" ? (
                    <div>
                      <div>{props.currentCourseName}</div>
                      <div>
                        <div>
                          {props.lessons.length > 0 ? (
                            <div>
                              {props.lessons.map((lesson) => (
                                <div className={style.lesson} key={lesson.id}>
                                  {props.currentLessonName ===
                                  lesson.lessonName ? (
                                    <div
                                      onClick={() => {
                                        change(lesson.lessonName);
                                      }}
                                      className={style.selected}
                                    >
                                      {lesson.lessonName}
                                    </div>
                                  ) : (
                                    <div
                                      onClick={() => {
                                        change(lesson.lessonName);
                                      }}
                                      className={style.unselected}
                                    >
                                      {lesson.lessonName}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={style.greetings}>
              Good morning! We are glad to see you.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProfileMain;
//Hello
