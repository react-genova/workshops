//@flow
import React from 'react';
import {_MovieContainer as MovieContainer} from '../MovieContainer';
import {PromiseState} from 'react-refetch'
import { shallow } from 'enzyme';

describe('MovieContainer component', () => {

    it('MovieContainer loading snapshot', () => {
        const moviesRefresh = jest.fn();
        const postRating = jest.fn();
        const moviesFetch = PromiseState.create();
        const component = shallow(
            <MovieContainer moviesFetch={moviesFetch} moviesRefresh={moviesRefresh} postRating={postRating}/>
        );
        expect(component).toMatchSnapshot();
    });

    it('MovieContainer error snapshot', () => {
        const moviesRefresh = jest.fn();
        const postRating = jest.fn();
        const moviesFetch = PromiseState.reject(new Error('boom'));
        const component = shallow(
            <MovieContainer moviesFetch={moviesFetch} moviesRefresh={moviesRefresh} postRating={postRating}/>
        );
        expect(component).toMatchSnapshot();
    });

    it('MovieContainer movies snapshot', () => {
        const moviesRefresh = jest.fn();
        const postRating = jest.fn();
        const movies = {
            "2": {
                id: "2",
                title: "Ave, Cesare!",
                original: "Hail, Caesar!",
                rating: 3,
                year: 2016
            },
            "3": {
                id: "3",
                title: "Frantic",
                original: "Frantic",
                rating: 3,
                year: 1988
            },
            "4": {
                id: "4",
                title: "Il ritorno dello Jedi",
                original: "Return of the Jedi",
                rating: 4,
                year: 1983
            }
        }
        const moviesFetch = PromiseState.resolve(movies);
        const component = shallow(
            <MovieContainer moviesFetch={moviesFetch} moviesRefresh={moviesRefresh} postRating={postRating}/>
        );
        expect(component).toMatchSnapshot();
    });

});