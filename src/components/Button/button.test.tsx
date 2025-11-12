import { render } from "@testing-library/react";
import React from "react";
import Button from "./button";

test("the first react test case", () => {
  const wrapper = render(<Button>NICE</Button>);
  const element = wrapper.queryByText("NICE");
  expect(element).toBeTruthy();
});
