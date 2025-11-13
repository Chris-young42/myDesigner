import classNames from "classnames";
import React, { useContext } from "react";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext);

  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "string") {
      context.onSelect(parseInt(index, 10)); // 转成数字再传回去
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

// ✅ 添加 displayName 方便父组件识别
MenuItem.displayName = "MenuItem";

export default MenuItem;
