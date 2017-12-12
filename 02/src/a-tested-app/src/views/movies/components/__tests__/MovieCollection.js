//@flow
import React from 'react';
import MovieCollection from '../MovieCollection';
import { shallow } from 'enzyme';

describe('MovieCollection component', () => {

    it('MovieCollection snapshot', () => {
        const updateRate = jest.fn();
        const movies = [
            {
                id: "2",
                title: "Ave, Cesare!",
                original: "Hail, Caesar!",
                rating: 3,
                year: 2016
            },
            {
                id: "3",
                title: "Frantic",
                original: "Frantic",
                rating: 3,
                year: 1988
            },
            {
                id: "4",
                title: "Il ritorno dello Jedi",
                original: "Return of the Jedi",
                rating: 4,
                year: 1983
            }
        ];
        const component = shallow(
            <MovieCollection movies={movies} updateRate={updateRate}/>
        );
        expect(component).toMatchSnapshot();
    });

});