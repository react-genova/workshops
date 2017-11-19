//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardRedux from '../CardRedux';

describe('Card Redux', () => {

    it('snapshot check', () => {
        const component = shallow(<CardRedux />);
        expect(component).toMatchSnapshot();
    });

});