import React, { useState, useEffect, useLayoutEffect } from 'react';
import styles from './index.module.less';
import { Input, Button, Select, Switch } from 'antd';
import Sortable from 'sortablejs';

const LeftBar = () => {
  const toolMenu = [
    {
      children: [
        {
          key: 'input',
          component: <Input />,
          text: '输入框',
        },
        {
          key: 'button',
          component: <Button />,
          text: '按钮',
        },
      ],
      group: '基础组件',
      key: 'basic',
    },
  ];

  useLayoutEffect(() => {
    const ele = document.getElementsByClassName(styles.container_LeftBar)[0];
    new Sortable(ele, {
      group: {
        name: 'shared',
        pull: 'clone',
        put: false,
      },
      animation: 150,
      sort: false, // To disable sorting: set sort to false
      handle: styles.item,
    });
  }, []);

  const onChange = () => {
    // const ele = document.getElementsByClassName(styles.container_LeftBar)[0];
    const ele = document.getElementById('example1');
    new Sortable(ele, {
      // group: {
      //   name: 'shared',
      //   pull: 'clone',
      //   put: false,
      // },
      // sort: false, // To disable sorting: set sort to false
      // handle: styles.item,
      animation: 150,
    });
  };

  return (
    <div className={styles.leftbar}>
      {/* {toolMenu.map((el) => {
        return (
          <div className={styles.container_LeftBar}>
            <div key={el.key}>{el.group}</div>
            {el?.children?.length > 0 ? (
              <div className={styles.toolSort}>
                {el.children.map((child) => (
                  <div className={styles.item} key={child.key}>
                    {child.text}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        );
      })} */}
      <div id="example1" className="list-group">
        <div className="list-group-item">Item 1</div>
        <div className="list-group-item">Item 2</div>
        <div className="list-group-item">Item 3</div>
        <div className="list-group-item">Item 4</div>
        <div className="list-group-item">Item 5</div>
        <div className="list-group-item">Item 6</div>
      </div>
    </div>
  );
};

export default LeftBar;
