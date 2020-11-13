import React from "react";
import { shallow } from "enzyme";
import { Post } from "../components/Post";

test("renders the Post component", () => {
  const component = shallow(<Post id={0} key={0}/>);
  expect(component).toMatchSnapshot();
});
