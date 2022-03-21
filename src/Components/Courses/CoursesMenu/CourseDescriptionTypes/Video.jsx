import style from "./types.module.css";
import Plyr from "plyr-react";
//import "plyr-react/dist/plyr.css";
function descriptionVideo(props) {
  let videoId = props.stepContent.split("=")[1].split("&")[0];
  console.log(videoId);
  return (
    <div>
      <div className={style.stepTitle}>{props.stepTitle}</div>
      <div className={style.video}>
        <iframe
          title="myFrame"
          id="player"
          type="text/html"
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + videoId}
        ></iframe>
      </div>
    </div>
  );
}
export default descriptionVideo;
