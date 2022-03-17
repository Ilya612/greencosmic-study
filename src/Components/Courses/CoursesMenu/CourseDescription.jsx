import style from "./CourseDescription.module.css";
import DescriptionVideo from "./CourseDescriptionTypes/Video";
import DescriptionText from "./CourseDescriptionTypes/Text";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import queryString from "query-string";
//import store from "../../../Redux/reduxStore";
//import { useState } from "react";
//import { setCurrentCourseName } from "../../../Redux/Reducers/coursesReducer.js";

function CourseDescription(props) {
  //const [initialEffect, setInitialEffect] = useState(0);

  return (
    <div>
      <div className={style.courseNameContainer}>
        <div className={style.courseName}>
          {props.courseDescription.courseName}
        </div>
        <div className={style.imageContainer}>
          <img
            className={style.img}
            src={props.courseDescription.mainImage}
            alt=""
          />
        </div>
      </div>
      <div className={style.buttonContainer}>
        <div className={style.button}>
          <NavLink to={"/courses/lessons"}>Start</NavLink>
        </div>
      </div>

      <div className={style.blocksContainer}>
        {props.courseDescription.blocks ? (
          props.courseDescription.blocks.map((p) => {
            if (p.blockType === "Text") {
              return (
                <DescriptionText
                  blockContent={p.blockContent}
                  blockName={p.blockName}
                />
              );
            }
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default CourseDescription;
