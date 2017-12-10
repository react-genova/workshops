// @flow
import * as React from 'react';
import {Container,List} from 'semantic-ui-react';
import Movie from './Movie';
import type { MovieType } from './types';

type Props = {
    movies: Array<MovieType>,
    onRate: (newRate:number) => void
};

const MovieCollection = ({movies,onRate}: Props) => (
    <List>
        {
            movies.map(({id, title, original, year, rating}:MovieType) =>
                <List.Item>
                    <Movie key={id} id={id} title={title} original={original} year={year} rating={rating} onRate={onRate} />
                </List.Item>
            )
        }
    </List>
);

export default MovieCollection;