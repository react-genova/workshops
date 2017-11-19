//@flow
import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card component', () => {

    it('Card snapshot', () => {
        const component = shallow(
            <Card title="I have 2 children" description="">
                <div>The first child</div>
                <div>The second child</div>
            </Card>
        );
        expect(component).toMatchSnapshot();
    });

});