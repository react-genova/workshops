//@flow
import React from 'react';
import Slide from '../Slide';
import { shallow } from 'enzyme';

describe('Slide component', () => {

    it('simple header snapshot', () => {
        const component = shallow(
            <Slide title="Welcome" description="to madness">
                <div>WELCOME</div>
            </Slide>);
        expect(component).toMatchSnapshot();
    });

});