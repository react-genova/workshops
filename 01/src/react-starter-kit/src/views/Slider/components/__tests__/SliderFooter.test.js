//@flow
import React from 'react';
import SlideFooter from '../SlideFooter';
import { shallow } from 'enzyme';

describe('SlideFooter component', () => {

    it('simple footer snapshot', () => {
        const component = shallow(<SlideFooter />);
        expect(component).toMatchSnapshot();
    });

});