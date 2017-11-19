//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardReact from '../CardReact';

describe('Card React', () => {

    it('snapshot check', () => {
        const component = shallow(<CardReact />);
        expect(component).toMatchSnapshot();
    });

});