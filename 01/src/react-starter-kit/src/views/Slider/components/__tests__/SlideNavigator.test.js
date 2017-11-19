//@flow
import React from 'react';
import SlideNavigator from '../SlideNavigator';
import { shallow } from 'enzyme';

describe('SlideNavigator component', () => {

    it('simple header snapshot', () => {
        const fake = () => {};
        const component = shallow(<SlideNavigator onNext={fake} onPrev={fake} />);
        expect(component).toMatchSnapshot();
    });

});