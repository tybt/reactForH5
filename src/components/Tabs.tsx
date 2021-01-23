import React from "react";
import { Tabs } from "antd";

interface Props {
  list: Array<string | number>;
  children?: any;
  slotDepart?: boolean;
  className?: string;
}

const CommonTabs = (props: Props = { list: [] }) => {
  return (
    <Tabs className={props.className}>
      {props.slotDepart
        ? props.list.map((elem) => {
            return (
              <Tabs.TabPane tab={elem} key={elem}>
                {getDepart(elem)}
              </Tabs.TabPane>
            );
          })
        : props.list.map((elem) => {
            return (
              <Tabs.TabPane tab={elem} key={elem}>
                {props.children}
              </Tabs.TabPane>
            );
          })}
    </Tabs>
  );
  function getDepart(name: string | number) {
    let res: any;
    props.children.forEach((elem:any) => {
      if (elem.props.slot === name) {
        res = elem;
      }
    });
    return res;
  }
};

export default CommonTabs;
