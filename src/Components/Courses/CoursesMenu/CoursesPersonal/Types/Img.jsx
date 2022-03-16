import style from "./types.module.css";
function Img(props) {
  return (
    <div className={style.blockContainer}>
      <div>
        <div className={style.blockName}>{props.stepName}</div>
        <div className={style.imgContainer}>
          <img className={style.img} alt="" src={props.stepContent} />
        </div>
      </div>
    </div>
  );
}
export default Img;
