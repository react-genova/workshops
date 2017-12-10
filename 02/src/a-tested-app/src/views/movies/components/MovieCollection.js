// @flow
import * as React from 'react';
import {List} from 'semantic-ui-react';
import Movie from './Movie';
import type { MovieType } from './types';

type Props = {
    movies: Array<MovieType>,
    onRate: (id:string, newRate:number) => void
};

const MovieCollection = ({movies,onRate}: Props) => (
    <List>
        {
            movies != null && movies.map(({id, title, original, year, rating}:MovieType) =>
                <List.Item key={id}>
                    <Movie id={id} title={title} original={original} year={year} rating={rating} onRate={onRate} />
                </List.Item>
            )
        }
    </List>
);

export default MovieCollection;