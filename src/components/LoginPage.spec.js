import React from "react";
import { shallow } from "enzyme";
import { Formik } from 'formik';

import LoginPage from './LoginPage';

describe("Login Page", () => {
  it("SnapShot of LoginPage", () => {
    const component = shallow(<LoginPage />);
    expect(component).toMatchSnapshot();
  });
  
  it("Check for input fields", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.containsMatchingElement(<Formik></Formik>)).toEqual(true);
  });
});
