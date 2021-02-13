import React, { useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./style.scss";
import Tabs from "../../components/Tabs/Tabs";
import Bottom from "../../components/Bottom";
import RightSlider from './components/RightSlider'
import BottomIntroduce from './components/BottomIntroduce'
import OriginMusicBar from './components/OriginMusicBar'
type VideoIndexProps = {};

interface VideoProps {
  play: () => void;
  pause: () => void;
}
export const Home = (props: VideoIndexProps) => {
  const [controlVideo, setcontrolVideo] = useState<VideoProps>({
    pause: () => {},
    play: () => {},
  });
  const videoInit = () => {
    videojs(
      document.querySelector(".video-js"),
      {
        language: "zh-CN",
        muted: true,
        controls: false,
        sources: [
          {
            src:
              "https://sf1-scmcdn2-tos.pstatp.com/ies/fe_app_new/musics/tvc-v3.d84159ab.mp4",
          },
        ],
      },
      function (this: VideoProps) {
        setcontrolVideo(this);
        this.play();
      }
    );
  };
  const setVideo = () => {
    controlVideo.pause();
  };
  useEffect(() => {
    videoInit();
  }, []);

  return (
    <div className="indexPage">
      <div className="header">
        <Tabs list={["本地", "关注", "推荐"]}></Tabs>
      </div>
      <div onClick={setVideo} className="videoBox">
        <video className="video-js" width="750" height="700">
          <source></source>
        </video>
      </div>
      <RightSlider></RightSlider>
      
      <OriginMusicBar></OriginMusicBar>
      <BottomIntroduce></BottomIntroduce>
      <Bottom></Bottom>
    </div>
  );
};
