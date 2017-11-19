//@flow
import React from 'react';
import { shallow } from 'enzyme';
import SlideConclusions from '../SlideConclusions';

describe('Slide Conclusions', () => {

    it('snapshot check', () => {
        const component = shallow(<SlideConclusions />);
        expect(component).toMatchSnapshot();
    });

});