import style from "./types.module.css";
/*import Plyr from "plyr-react";
//import "plyr-react/dist/plyr.css";
function Video(props) {
  const id =
    props.stepContent !== ""
      ? props.stepContent.split("=")[1].split("&")[0]
      : "7MJBeAyU1As";
  const src = "https://https://www.youtube.com/embed/" + id;

  const videoSrc = {
    type: "video",

    sources: [
      {
        src: src,
        provider: "youtube",
      },
    ],
  };

  return (
    <div className={style.videoContainer}>
      <div className={style.blockName}>{props.stepName}</div>
      <div className={style.blockVideo}>
        <PlyrComponent source={videoSrc} />
      </div>
    </div>
  );
}
export default Video;*/
import React, { useEffect } from "react";
import Clappr from "clappr";
//import PlaybackRatePlugin from "clappr-playback-rate-plugin";
import ClapprMarkersPlugin from "clappr-markers-plugin";

const ClapprComponent = ({ id, source, mute, height, width }) => {
  let clappr_player = null;

  useEffect(() => {
    clappr_player = new Clappr.Player({
      parentId: `#${id}`,
      source: source,
      mute,
      height,
      width,
      plugins: [ClapprMarkersPlugin],
      markersPlugin: {
        markers: [
          new ClapprMarkersPlugin.StandardMarker(0, "The beginning!"),
          new ClapprMarkersPlugin.StandardMarker(5, "Something interesting."),
          new ClapprMarkersPlugin.StandardMarker(9, "The conclusion."),
        ],
        tooltipBottomMargin: 17, // optional
      },
    });

    clappr_player.getPlugin("markers-plugin");

    return () => {
      clappr_player.destroy();
      clappr_player = null;
    };
  }, []);

  return (
    <div>
      <p id={id}></p>
    </div>
  );
};

export const Video = (props) => {
  const youtubeId =
    props.stepContent !== ""
      ? props.stepContent.split("=")[1].split("&")[0]
      : "7MJBeAyU1As";
  const src = "https://https://www.youtube.com/embed/" + youtubeId;
  return (
    <div>
      <ClapprComponent id="video" source={src} height={360} width={640} />
    </div>
  );
};

export default Video;
