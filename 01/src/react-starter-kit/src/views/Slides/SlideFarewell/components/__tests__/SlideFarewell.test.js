//@flow
import React from 'react';
import { shallow } from 'enzyme';
import SlideFarewell from '../SlideFarewell';

describe('Slide Farewell', () => {

    it('snapshot check', () => {
        const component = shallow(<SlideFarewell />);
        expect(component).toMatchSnapshot();
    });

});