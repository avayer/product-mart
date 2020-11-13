import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import NavbarComponent from './NavbarComponent';

describe('Testing Navbar Component', () => {

    it('Snapshot of Navbar component', () => {
        const wrapper = shallow(<NavbarComponent />);

        expect(wrapper).toMatchSnapshot();
    })

    it('check for links in navbar', () => {
        const wrapper = shallow(<NavbarComponent />);

        expect(wrapper.find(Link)).toHaveLength(4);
    })
})