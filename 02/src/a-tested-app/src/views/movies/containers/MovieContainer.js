// @flow
import * as React from 'react';
import { connect } from 'react-refetch'
import { Button, Loader,Message} from 'semantic-ui-react'
import MovieCollection from '../components/MovieCollection'
import type {MovieType} from '../components/types'

type Props = {
    moviesFetch: {
        pending: boolean,
        rejected: boolean,
        reason:string,
        fulfilled: boolean,
        value: {
            [string]:MovieType
        }
    },
    moviesRefresh: () => void,
    postRating: ({id:string, rating:number}) => void
};

const MovieContainer = ({moviesFetch,moviesRefresh,postRating}:Props) => {
    if (moviesFetch.pending) {
        return  <Loader active/>
    }
    else if(moviesFetch.rejected){
        return <Message negative>
            <Message.Header>Errore</Message.Header>
            <p>Errore durante il caricamento dei film</p>
            <Button onClick={()=>moviesRefresh()}>Ricarica</Button>
        </Message>
    }
    else if(moviesFetch.fulfilled){
        const movies = Object.keys(moviesFetch.value).map(function(key, index) {
            return moviesFetch.value[key];
        });
        return <MovieCollection movies={movies} updateRate={ (id, newRate) => {postRating({id, rating: newRate})}} />
    }
    else
        return null;
};


export {MovieContainer as _MovieContainer};
export default connect(props => ({
    moviesFetch: `/movies`,
    moviesRefresh: () => ({
        moviesFetch: {
          url: `/movies`,
          force: true,
          refreshing: true
        }
    }),
    postRating: ({id, rating}) => ({
      postRatingResponse: {
        url: `/rate`,
        method: 'POST',
        body: JSON.stringify({id,rating}),
        andThen: () => ({
          moviesFetch: {
            url: '/movies',
            force:true
          }
        })
      }
    })
}))(MovieContainer)