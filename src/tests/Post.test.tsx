import React from "react";
import { shallow } from "enzyme";
import { Register } from "../components/Register";

test("renders the Post component", () => {
  const component = shallow(<Register/>);
  expect(component).toMatchSnapshot();
});
