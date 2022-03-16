import style from "./types.module.css";
function Img(props) {
  return (
    <div className={style.blockContainer}>
      <div>
        <div className={style.blockName}>{props.blockName}</div>
      </div>
    </div>
  );
}
export default Img;
