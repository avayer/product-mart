import React from "react";
import { shallow } from "enzyme";

import SearchField from './SearchField';

describe("Testing SearchField Component", () => {
  it("Snapshot of SearchField component", () => {
    const wrapper = shallow(<SearchField />);

    expect(wrapper).toMatchSnapshot();
  });

  it("check for input field", () => {
    const wrapper = shallow(<SearchField />);

    expect(wrapper.containsMatchingElement(<input/>)).toEqual(true);
  });
});
