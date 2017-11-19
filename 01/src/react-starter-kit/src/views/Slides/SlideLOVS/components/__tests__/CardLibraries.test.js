//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardLibraries from '../CardLibraries';

describe('Card Libraries', () => {

    it('snapshot check', () => {
        const onClick = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<CardLibraries onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

});