import React from "react";
import { shallow } from "enzyme";
import { UserComment } from "../components/UserComment";


test("renders the UserComment component", () => {
    const component = shallow(<UserComment/>);
    expect(component).toMatchSnapshot();
});