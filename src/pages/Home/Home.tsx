import React, { useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./style.scss";
import Tabs from "../../components/Tabs";
type VideoIndexProps = {};

export const Home = (props: VideoIndexProps) => {
  const [tabsName, settabsName] = useState(["本地","关注","推荐"]);
  useEffect(() => {
    videoInit();
  }, []);

  return (
    <div className="indexPage">
      <div className="tabsBox flexCenter">
        <Tabs list={tabsName} ></Tabs>
      </div>
      <video className="video-js" width="750" height="700">
        <source></source>
      </video>
    </div>
  );
  function videoInit() {
    videojs(
      document.querySelector(".video-js"),
      {
        language: "zh-CN",
        muted: "muted",
        controls: false,
        sources: [
          {
            src:
              "https://sf1-scmcdn2-tos.pstatp.com/ies/fe_app_new/musics/tvc-v3.d84159ab.mp4",
          },
        ],
      },
      function () {
        console.log("onPlayerReady", this);
        try {
          this.play();
        } catch (error) {
          console.log(error);
        }
      }
    );
  }
};
