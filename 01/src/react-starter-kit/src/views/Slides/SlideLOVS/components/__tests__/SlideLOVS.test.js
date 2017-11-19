//@flow
import React from 'react';
import { shallow } from 'enzyme';
import SlideLOVS from '../SlideLOVS';

describe('Slide LOVS', () => {

    it('snapshot check', () => {
        const openURL = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<SlideLOVS openURL={openURL} />);
        expect(component).toMatchSnapshot();
    });

});