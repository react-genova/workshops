//@flow
import React from 'react';
import SlideHeader from '../SlideHeader';
import { shallow } from 'enzyme';

describe('SlideHeader component', () => {

    it('simple header snapshot', () => {
        const component = shallow(<SlideHeader title="react-genova" description="workshop 01" />);
        expect(component).toMatchSnapshot();
    });

});