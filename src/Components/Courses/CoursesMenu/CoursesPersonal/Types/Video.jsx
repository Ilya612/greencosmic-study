import style from "./types.module.css";
/*import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";*/
function Video(props) {
  const id =
    props.stepContent !== ""
      ? props.stepContent.split("=")[1].split("&")[0]
      : "7MJBeAyU1As";
  const src = "https://https://www.youtube.com/embed/" + id;
  /*
  const videoSrc = {
    type: "video",

    sources: [
      {
        src:
          props.stepContent !== ""
            ? props.stepContent.split("=")[1].split("&")[0]
            : "7MJBeAyU1As",
        provider: "youtube",
      },
    ],
  };
*/
  return (
    <div className={style.videoContainer}>
      <div className={style.blockName}>{props.stepName}</div>
      <div className={style.blockVideo}>
        <iframe width={420} height={315} src={src}></iframe>
      </div>
    </div>
  );
}
export default Video;
