//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardDeveloperTools from '../CardDeveloperTools';

describe('Card Developer Tools', () => {

    it('snapshot check', () => {
        const onClick = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<CardDeveloperTools onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

});