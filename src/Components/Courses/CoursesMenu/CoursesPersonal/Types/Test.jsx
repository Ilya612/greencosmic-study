import style from "./types.module.css";
import { useState } from "react";
function Test(props) {
  const [myQuestion, setMyQuestion] = useState("");
  const [myAnswer, setMyAnswer] = useState("");

  const [right, setRight] = useState(false);
  if (!right) {
    props.setBlock(true);
  }
  function testing() {
    return (
      <div>
        {props.stepContent.map((content) => {
          return (
            <div className={style.optionContainer}>
              {content.question == myQuestion ? (
                <div
                  onClick={() => {
                    setMyAnswer(content.answer);
                    setMyQuestion(content.question);
                  }}
                  className={style.selected}
                >
                  {content.question}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setMyAnswer(content.answer);
                    setMyQuestion(content.question);
                  }}
                  className={style.unselected}
                >
                  {content.question}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  function check() {
    if (myAnswer) {
      setRight(true);
      props.setBlock(false);
      return;
    }
    return;
  }

  return (
    <div className={style.blockContainer}>
      <div>
        <div className={style.blockName}>{props.stepName}</div>
        <div className={style.sss}>
          {right ? (
            <div className={style.right}>{testing()}</div>
          ) : (
            <div className={style.not}>{testing()}</div>
          )}

          <div className={style.checkAnswerContainer}>
            <div
              className={style.checkAnswer}
              onClick={() => {
                check();
              }}
            >
              Check Right Answer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Test;
