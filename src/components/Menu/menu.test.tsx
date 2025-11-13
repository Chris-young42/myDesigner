import React from "react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import { render, RenderResult } from "@testing-library/react";
const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",

};
const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: "horizontal",
};
const createStyleFile = () => {
  const cssFile: string = `
    .my-menu-submenu {
      display: none;
    }
    .my-menu-submenu.menu-opened {
      display:block;
    }
  `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
  <MenuItem index={""}>cool link1</MenuItem>
  <MenuItem index={""}>cool link2</MenuItem>
  <MenuItem index={""}>cool link3</MenuItem>
  <MenuItem index={""}>cool link4</MenuItem>
</Menu>
  );
};
let wrapper: RenderResult,
  wrapper2: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("my-menu test");
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(5);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("chick items should change active and call the call the right callback", () => {});
  it("should render vertical mode when mode is set to vertical", () => {});
});
