//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardLibraries from '../CardLibraries';

describe('Card Libraries', () => {

    it('snapshot check', () => {
        const component = shallow(<CardLibraries />);
        expect(component).toMatchSnapshot();
    });

});