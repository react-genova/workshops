//@flow
import React from 'react';
import Rating, {onRateHandler} from '../Rating';
import { shallow } from 'enzyme';

describe('Rating component', () => {

    it('Rating snapshot', () => {
        const onRate = jest.fn();
        const component = shallow(
            <Rating id="1" rating={3} maxRating={5} onRate={onRate} />
        );
        expect(component).toMatchSnapshot();
    });

    it('Rating onRate', () => {
        const onRate = jest.fn();
        const id = "1";
        const newRating = 5;
        const component = shallow(
            <Rating id={id} rating={3} maxRating={5} onRate={onRate} />
        );
        component.simulate('rate', id, newRating);
        // The mock function is called twice
        expect(onRate.mock.calls.length).toBe(1);
        // The first argument of the first call to the function was "id"
        expect(onRate.mock.calls[0][0]).toBe(id);
        // The second argument of the first call to the function was "newRating"
        expect(onRate.mock.calls[0][1]).toBe(newRating);
    });

    it('onRateHandler', () => {
        const onRate = jest.fn();
        const id = "1";
        const newRating = 5;
        const props = {
            rating: 1, 
            maxRating:5,
            id,
            onRate
        };
        const event = {};
        const data = {rating: newRating};
        onRateHandler(props)(event,data);
        // The mock function is called twice
        expect(onRate.mock.calls.length).toBe(1);
        // The first argument of the first call to the function was "id"
        expect(onRate.mock.calls[0][0]).toBe(id);
        // The second argument of the first call to the function was "newRating"
        expect(onRate.mock.calls[0][1]).toBe(newRating);
    });

});