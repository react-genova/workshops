//@flow
import React from 'react';
import LabelTerminal from '../LabelTerminal';
import { shallow } from 'enzyme';

describe('LabelTerminal component', () => {

    it('simple label snapshot', () => {
        const component = shallow(<LabelTerminal text="npm install --save redux" />);
        expect(component).toMatchSnapshot();
    });

});