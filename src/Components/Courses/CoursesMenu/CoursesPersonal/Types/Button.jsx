import style from "./types.module.css";
function Button(props) {
  props.setButton(true);
  return (
    <div className={style.buttonContainer}>
      <div
        onClick={() => {
          props.onPageChanged();
        }}
        className={style.button}
      >
        Continue
      </div>
    </div>
  );
}
export default Button;
