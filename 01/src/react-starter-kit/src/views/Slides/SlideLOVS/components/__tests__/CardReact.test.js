//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardReact from '../CardReact';

describe('Card React', () => {

    it('snapshot check', () => {
        const onClick = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<CardReact onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

});