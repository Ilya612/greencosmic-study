import style from "../Courses.module.css";
import React from "react";
import { useState } from "react";
import Step from "./Step.jsx";

function CoursesAdmin(props) {
  const [courseName, setCourseName] = useState("");

  return (
    <div className={style.container}>
      <div className={style.admin}>Admin Page</div>
      <div className={style.newContainer}>
        <div className={style.title}>
          <div className={style.text}>Course Title:</div>

          <div className={style.inputContainer}>
            <div className={style.customInput}>
              <input
                value={courseName}
                onInput={(evt) => setCourseName(evt.target.value)}
                type="text"
                placeholder="Course Title"
                name=""
              />
            </div>
          </div>
          <div>
            <div>Lesson title:</div>
            <div>
              {props.stepsLength.map((p) => (
                <div name={p.toString()} key={p.toString()}>
                  <Step updateCourse={props.updateCourse} id={p} />
                </div>
              ))}
            </div>
            <div className={style.buttonContainer}>
              <button className={style.button} onClick={() => props.change()}>
                Add Step
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className={style.button}
        onClick={() => {
          props.createCourse({ courseName });
        }}
      >
        Create Course
      </button>
    </div>
  );
}
export default CoursesAdmin;
