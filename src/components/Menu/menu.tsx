import classNames from "classnames";
import React, {
  createContext,
  isValidElement,
  ReactElement,
  useState,
} from "react";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
type SelectCallBack = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallBack;
  children?: React.ReactNode;
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallBack;
  mode?: MenuMode;
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode = "horizontal",
    style,
    children,
    defaultIndex = 0,
    onSelect,
  } = props;

  const [currentActive, setActive] = useState(defaultIndex.toString());

  const classes = classNames("my-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode === "horizontal",
  });

  const handleClick = (index: number) => {
    setActive(index.toString());
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode,
  };

  /** ✅ 修复：真正使用 renderChildren() 渲染克隆后的节点 */
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

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
