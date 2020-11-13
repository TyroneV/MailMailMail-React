import React from "react";
import { shallow } from "enzyme";
import { ResetPassword } from "../components/ResetPassword";

test("renders the App component", () => {
  const component = shallow(<ResetPassword />);
  expect(component).toMatchSnapshot();
});