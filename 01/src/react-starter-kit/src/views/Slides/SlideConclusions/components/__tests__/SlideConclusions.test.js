//@flow
import React from 'react';
import { shallow } from 'enzyme';
import SlideConclusions from '../SlideConclusions';

describe('Slide Conclusions', () => {

    it('snapshot check', () => {
        const openURL = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<SlideConclusions openURL={openURL} />);
        expect(component).toMatchSnapshot();
    });

});