import style from "./types.module.css";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
function Video(props) {
  const videoSrc = {
    type: "video",

    sources: [
      {
        src:
          props.stepContent !== ""
            ? props.stepContent.split("=")[1].split("&")[0]
            : "7MJBeAyU1As",
        provider: "youtube",
        origin: "http://localhost:3000",
      },
    ],
  };
  console.log("7777777777");
  console.log(videoSrc);
  return (
    <div className={style.videoContainer}>
      <div className={style.blockName}>{props.stepName}</div>
      <div className={style.blockVideo}>
        <Plyr source={videoSrc} />
      </div>
    </div>
  );
}
export default Video;
