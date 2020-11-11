import React from 'react';
import { shallow, mount } from 'enzyme';

import Landing from './Landing';
import NavbarComponent from './ui-components/NavbarComponent';

describe("Landing Page", () => {

    it("Snapshot Of Landing Page", () => {
        const component = shallow(<Landing />);
        expect(component).toMatchSnapshot();
    });

  it("Check if  Navbar is rendered", () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.containsMatchingElement(<NavbarComponent />)).toEqual(true);
  });
  
});