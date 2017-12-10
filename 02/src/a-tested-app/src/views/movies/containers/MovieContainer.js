// @flow
import * as React from 'react';
import MovieCollection from '../components/MovieCollection'
import type {MovieType} from '../components/types'


type Props = {
    movies: Array<MovieType>,
    onRate: (id:string, newRate:number) => void
};

const MovieContainer = ({movies,onRate}:Props) => 
    <MovieCollection movies={movies} onRate={onRate}/>
;

export default MovieContainer;