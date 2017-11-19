//@flow
import React from 'react';
import SlideHeader from '../SlideHeader';
import { shallow } from 'enzyme';

describe('SlideHeader component', () => {

    it('simple header snapshot', () => {
        const component = shallow(<SlideHeader />);
        expect(component).toMatchSnapshot();
    });

});