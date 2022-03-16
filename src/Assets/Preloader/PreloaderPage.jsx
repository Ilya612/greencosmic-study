import load from "./preloader.gif";
import style from "./Preloader.module.css";
function preloader() {
  return (
    <div className={style.container}>
      <img src={load} alt=" " />
    </div>
  );
}
export default preloader;
