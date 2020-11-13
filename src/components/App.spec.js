import React, { Suspense } from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";

import App from "./App";

describe("Testing App Component", () => {
  it("Snapshot of App component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it("check for Routes in App", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Route)).toHaveLength(12);
  });
});