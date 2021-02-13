import React, { useState } from "react";
import Tabs from "../Tabs/Tabs";
import Img_1 from "../../asserts/images/add_03.png";
import "./style.scss";
export default function Bottom(props: any) {
  const [list, setlist] = useState([
    "首页",
    "朋友",
    <img src={Img_1} className="img_1"></img>,
    "消息",
    "我",
  ]);
  return (
    <div className="appBottom flexCenter">
      <Tabs list={list}></Tabs>
    </div>
  );
}
