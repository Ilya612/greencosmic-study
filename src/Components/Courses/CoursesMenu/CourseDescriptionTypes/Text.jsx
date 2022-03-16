import style from "./types.module.css";
function descriptionText(props) {
  return (
    <div className={style.blockContainer}>
      <div>
        <div className={style.blockName}>{props.blockName}</div>
        <div className={style.blockContent}>{props.blockContent}</div>
      </div>
    </div>
  );
}
export default descriptionText;
