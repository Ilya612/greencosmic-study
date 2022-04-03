import style from "./types.module.css";

import Vimeo from "@u-wave/react-vimeo";

function Video(props) {
  const id =
    props.stepContent !== "" ? props.stepContent.split("/")[3] : "632060933";

  return (
    <div className={style.blockContainer}>
      <div>
        <div className={style.blockName}>{props.stepName}</div>
        <div className={style.imgContainer}>
          <Vimeo width={1080} video={id} autoplay />;
        </div>
      </div>
    </div>
  );
}
export default Video;
