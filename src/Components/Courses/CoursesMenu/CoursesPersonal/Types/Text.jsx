import style from "./types.module.css";
function Text(props) {
  return (
    <div className={style.blockContainer}>
      <div>
        <div className={style.blockName}>{props.stepName}</div>
        <div className={style.blockContent}>{props.stepContent}</div>
      </div>
    </div>
  );
}
export default Text;
