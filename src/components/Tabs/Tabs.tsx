import React from "react";
import { Tabs } from "antd";
import "./style.scss";
interface Props {
  list: Array<string | number | any>;
  children?: any;
  slotDepart?: boolean;
  className?: string;
}

const CommonTabs = (props: Props = { list: [] }) => {
  return (
    <Tabs className={`${props.className} tabsBox`}>
      {props.list.map((elem, index) => {
        return (
          <Tabs.TabPane tab={elem} key={index}>
            {props.slotDepart ? getDepart(elem) : props.children}
          </Tabs.TabPane>
        );
      })}
    </Tabs>
  );
  function getDepart(name: string | number | any) {
    let res: any;
    props.children.forEach((elem: any) => {
      if (elem.props.slot === name) {
        res = elem;
      }
    });
    return res;
  }
};

export default CommonTabs;
