//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardStudy from '../CardStudy';

describe('Card Study', () => {

    it('snapshot check', () => {
        const onClick = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<CardStudy onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

});