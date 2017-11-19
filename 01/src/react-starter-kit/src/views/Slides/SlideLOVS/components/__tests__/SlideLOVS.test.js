//@flow
import React from 'react';
import { shallow } from 'enzyme';
import SlideLOVS from '../SlideLOVS';

describe('Slide LOVS', () => {

    it('snapshot check', () => {
        const component = shallow(<SlideLOVS />);
        expect(component).toMatchSnapshot();
    });

});