//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardTesting from '../CardTesting';

describe('Card Testing', () => {

    it('snapshot check', () => {
        const onClick = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<CardTesting onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

});