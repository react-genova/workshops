//@flow
import React from 'react';
import Movie from '../Movie';
import { shallow } from 'enzyme';

describe('Movie component', () => {

    it('Movie snapshot', () => {
        const updateRate = (id:string, newRate:number)=>{};
        const component = shallow(
            <Movie id="1" title="Il grande Lebowski" original="The Big Lebowski" rating={3} year={1998} updateRate={updateRate} />
        );
        expect(component).toMatchSnapshot();
    });

});