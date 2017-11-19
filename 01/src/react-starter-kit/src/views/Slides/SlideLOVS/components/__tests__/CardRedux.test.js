//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardRedux from '../CardRedux';

describe('Card Redux', () => {

    it('snapshot check', () => {
        const onClick = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<CardRedux onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

});