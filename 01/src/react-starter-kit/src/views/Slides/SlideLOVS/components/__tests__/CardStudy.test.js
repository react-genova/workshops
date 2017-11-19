//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardStudy from '../CardStudy';

describe('Card Study', () => {

    it('snapshot check', () => {
        const component = shallow(<CardStudy />);
        expect(component).toMatchSnapshot();
    });

});