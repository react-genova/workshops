//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardConclusions from '../CardConclusions';

describe('Card Conclusions', () => {

    it('snapshot check', () => {
        const component = shallow(<CardConclusions />);
        expect(component).toMatchSnapshot();
    });

});