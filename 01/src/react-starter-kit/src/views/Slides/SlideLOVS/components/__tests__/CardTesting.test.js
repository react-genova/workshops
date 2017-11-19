//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardTesting from '../CardTesting';

describe('Card Testing', () => {

    it('snapshot check', () => {
        const component = shallow(<CardTesting />);
        expect(component).toMatchSnapshot();
    });

});