import { fireEvent, render } from "@testing-library/react";
// import React from "react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

// test("the first react test case", () => {
//   const wrapper = render(<Button>NICE</Button>);
//   const element = wrapper.queryByText("NICE");
//   expect(element).toBeTruthy();
//   expect(element).toBeInTheDocument();
// });
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.large,
  className: "klass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};
describe("test the button components", () => {
  it(" is the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>NICE</Button>);
    const element = wrapper.getByText("NICE") as HTMLButtonElement
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeFalsy();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it(" is the correct default button and props change", () => {
    const wrapper = render(<Button {...testProps}>NICE</Button>);
    const element = wrapper.getByText("NICE");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg klass");
  });
  it(" is the correct default button and props have href is provided", () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        NICE
      </Button>
    );
    const element = wrapper.getByText("NICE");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it(" is the correct default button and props disabled set to true", () => {
    const wrapper = render(
      <Button {...disabledProps}>
        NICE
      </Button>
    );
    const element = wrapper.getByText("NICE") as HTMLButtonElement
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  });
});
