import style from "../Courses.module.css";

import { useState } from "react";

function Step(props) {
  const [stepTitle, setStepTitle] = useState("");
  const [stepType, setStepType] = useState("");
  const [stepContent, setStepContent] = useState("");
  /* let obj = {
    stepTitle,
    stepType,
    stepContent,
    id: props.id,
  };*/
  props.updateCourse({
    stepTitle,
    stepType,
    stepContent,
    id: props.id,
  });
  //console.log(props.id);
  return (
    <div className={style.steps}>
      <div>Steps:</div>
      <div className={style.oneStep}>
        <div className={style.stepTitle}>
          <div className={style.text}>Title:</div>
          <div className={style.customInput}>
            <input
              value={stepTitle}
              onInput={(evt) => setStepTitle(evt.target.value)}
              type="text"
              placeholder="Step Title"
              name=""
            />
          </div>
        </div>
        <div className={style.stepTitle}>
          <div className={style.text}>Type: </div>
          <div className={style.type}>
            <select
              className={style.select}
              value={stepType}
              onChange={(evt) => setStepType(evt.target.value)}
            >
              <option selected value="Text">
                Text
              </option>
              <option value="Text">Video</option>
              <option value="Text">Test</option>
            </select>
          </div>
        </div>
        <div className={style.stepTitle}>
          <div className={style.text}>Content: </div>
          <div>
            <textarea
              className={style.textarea}
              value={stepContent}
              onChange={(evt) => setStepContent(evt.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Step;
