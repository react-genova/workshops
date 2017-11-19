//@flow
import React from 'react';
import { shallow } from 'enzyme';
import CardConclusions from '../CardConclusions';

describe('Card Conclusions', () => {

    it('snapshot check', () => {
        const onClick = (url:string)=>{url.toLocaleLowerCase();};
        const component = shallow(<CardConclusions onClick={onClick} />);
        expect(component).toMatchSnapshot();
    });

});