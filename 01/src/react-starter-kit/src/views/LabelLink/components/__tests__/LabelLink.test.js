//@flow
import React from 'react';
import LabelLink from '../LabelLink';
import { shallow } from 'enzyme';

describe('LabelLink component', () => {

    it('simple label snapshot', () => {
        const component = shallow(<LabelLink title="Google" description="One of the best search engine" url="http://www.google.it/" />);
        expect(component).toMatchSnapshot();
    });

});