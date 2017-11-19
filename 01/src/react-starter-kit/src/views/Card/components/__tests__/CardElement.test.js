//@flow
import React from 'react';
import CardElement from '../CardElement';
import { shallow } from 'enzyme';

describe('CardElement component', () => {

    it('simple CardElement snapshot', () => {
        const component = shallow(<CardElement title="Google" description="One of the best search engine" url="https://www.google.it/" />);
        expect(component).toMatchSnapshot();
    });

    it('nested CardElement snapshot', () => {
        const component = shallow(
            <CardElement title="Search engines" description="A not  exhaustive list of search engines" url="">
                <CardElement title="Google" description="One of the best search engine" url="https://www.google.it/" />
                <CardElement title="Duck Duck Go" description="Another search engine" url="https://duckduckgo.com/" />
            </CardElement>
        );
        expect(component).toMatchSnapshot();
    });

});