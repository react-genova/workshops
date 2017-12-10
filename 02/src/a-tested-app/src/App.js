import React, { Component } from 'react';
import { connect } from 'react-refetch'
import logo from './logo.svg';
import MovieContainer from './views/movies/containers/MovieContainer'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
  render() {
    const { moviesFetch } = this.props;
    if (moviesFetch.pending) {
      return <div>Loading</div>
    } else if (moviesFetch.rejected) {
      return <div>{moviesFetch.reason}</div>
    } else if (moviesFetch.fulfilled) {
      const movies = Object.keys(moviesFetch.value).map(function(key, index) {
        return moviesFetch.value[key];
      });
      return <MovieContainer movies={movies} onRate={ (id, newRate) => {this.props.postRating({id, rating: newRate})}} />
    }
  }
}

export default connect(props => ({
  moviesFetch: `/movies`,
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
}))(App)
