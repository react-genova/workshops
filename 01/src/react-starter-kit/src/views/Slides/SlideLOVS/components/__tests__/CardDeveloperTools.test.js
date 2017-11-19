//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardDeveloperTools from '../CardDeveloperTools';

describe('Card Developer Tools', () => {

    it('snapshot check', () => {
        const component = shallow(<CardDeveloperTools />);
        expect(component).toMatchSnapshot();
    });

});