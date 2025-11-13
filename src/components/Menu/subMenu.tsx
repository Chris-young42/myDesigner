import React, {
  FC,
  useState,
  useContext,
  isValidElement,
  ReactElement,
} from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  /**  */
  index?: string;
  /** 	下拉菜单选项的文字 */
  title: string;
  /** 下拉菜单选型的扩展类名 */
  className?: string;
  children?: any;
}

const SubMenu: FC<SubMenuProps> = ({ children, index, title, className }) => {
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (!isValidElement(child)) return null;

      const childElement = child as ReactElement<MenuItemProps>;
      const { displayName } = childElement.type as any;

      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(), // 自动分配 index
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem or SubMenu component"
        );
        return null;
      }
    });
  };

  return <div>{renderChildren()}</div>;
};

export default SubMenu;
