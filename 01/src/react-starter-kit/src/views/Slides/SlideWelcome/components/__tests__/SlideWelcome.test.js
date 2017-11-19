//@flow
import React from 'react';
import { shallow } from 'enzyme';
import SlideWelcome from '../SlideWelcome';

describe('Slide Welcome', () => {

    it('snapshot check', () => {
        const component = shallow(<SlideWelcome />);
        expect(component).toMatchSnapshot();
    });

});