import style from "./CoursesSteps.module.css";
import React, { useEffect, useState } from "react";
import $api from "../../../../Http";
import Text from "./Types/Text";
import Video from "./Types/Video";
import Img from "./Types/Img";
import Button from "./Types/Button.jsx";
import Test from "./Types/Test";
import queryString, { parse } from "query-string";
import Preloader from "../../../../Assets/Preloader/PreloaderPage.jsx";

import { useHistory } from "react-router-dom";
import changeStepsArray from "./setSteps.js";

function CoursesSteps(props) {
  const [currentStep, setCurrentStep] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [initialEffect, setInitialEffect] = useState(true);
  const [changes, setChanges] = useState(0);
  const [button, setButton] = useState(false);
  const [initialPath, setInitialPath] = useState(true);
  const [block, setBlock] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  //const totalCount = props.steps.length;
  const history = useHistory();

  useEffect(() => {
    if (initialPath && !initialEffect) {
      const parsed = queryString.parse(history.location.search);
      $api
        .post("/course/lessons", { courseName: parsed.course_name })
        .then((response) => {
          props.setLessons(response.data.lessons);
        });
      props.setCurrentCourseName(parsed.course_name);
      props.setCurrentLessonName(parsed.lesson_name);

      if (
        parsed.course_name !== "" &&
        parsed.lesson_name !== "" &&
        props.auth
      ) {
        changeStepsArray(parsed.course_name, parsed.lesson_name);
        setInitialPath(false);
      }
    }
  }, [props.auth, initialEffect, changes]);

  useEffect(() => {
    if (props.currentCourseName && props.currentLessonName) {
      const parsed = queryString.parse(history.location.search);
      if (
        parsed.course_name !== props.currentCourseName ||
        parsed.lesson_name !== props.currentLessonName
      ) {
        setInitialPath(false);
        setChanges(changes + 1);
        setCurrentStep([]);
        setCurrentPage(0);
        setBlock(false);
      }
      history.push({
        pathname: "/courses/lessons/steps",
        search:
          "?course_name=" +
          props.currentCourseName +
          "&lesson_name=" +
          props.currentLessonName,
      });
    }
    setInitialPath(true);
    setInitialEffect(false);
  }, [props.auth, props.currentLessonName]);

  useEffect(() => {
    //setTotalCount(props.steps.length);
    if (props.steps.length > 0 && currentPage <= props.steps?.length) {
      const { search } = history.location;
      const parsed = queryString.parse(search);

      $api
        .post("/course/one-step", {
          courseName: parsed.course_name,
          lessonName: parsed.lesson_name,
          stepName: props.steps[currentPage]?.stepName,
        })
        .then((response) => {
          console.log(response);
          let error = false;
          if (response.data.message) {
            error = true;
          }

          let i = 0;

          currentStep.map((step) => {
            if (
              step.stepName === response.data.stepName &&
              response.data.stepName
            ) {
              i++;
            }
            return step;
          });

          if (i === 0 && !error) {
            setCurrentStep([...currentStep, response.data]);
            setCurrentPage(currentPage + 1);
          }
        })
        .finally(() => {})
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <div>
      <div id="content">
        {currentStep.map((step, index) => {
          if (step.stepType === "Test") {
            return (
              <Test
                key={index}
                stepName={step.stepName}
                stepContent={step.stepContent}
                setBlock={setBlock}
              />
            );
          }
          if (step.stepType === "Img") {
            return (
              <Img
                key={index}
                stepName={step.stepName}
                stepContent={step.stepContent}
              />
            );
          }
          if (step.stepType === "Text") {
            return (
              <Text
                key={index}
                stepName={step.stepName}
                stepContent={step.stepContent}
              />
            );
          }
          if (step.stepType === "Video") {
            /*const id =
              props.stepContent !== ""
                ? props.stepContent.split("=")[1].split("&")[0]
                : "7MJBeAyU1As";
            const src = "https://https://www.youtube.com/embed/" + id;

            const videoSrc = {
              sources: [
                {
                  src: src,
                  provider: "youtube",
                },
              ],
            };*/
            return (
              <Video
                key={index}
                stepName={step.stepName}
                stepContent={step.stepContent}
              />
            );
          }

          return step;
        })}
        {props.steps?.length !== 0 && props.steps?.length > currentPage ? (
          <Preloader />
        ) : (
          <></>
        )}
        {props.steps?.length !== 0 &&
        (props.steps?.length === currentPage ||
          props.steps?.length < currentPage) &&
        !button &&
        !block ? (
          <Button
            onPageChanged={props.onPageChanged}
            setButton={() => setButton}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default CoursesSteps;
