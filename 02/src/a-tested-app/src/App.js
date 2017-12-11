import React, { Component } from 'react';
import logo from './logo.svg';
import MovieContainer from './views/movies/containers/MovieContainer'
import {Container, Header,Divider,Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Segment
              inverted
              textAlign='center'
              style={{ minHeight: '5em', padding: '1em 0em' }}
            >
            <Header>A tested app</Header>
        </Segment>
        <Container>
          <MovieContainer />
        </Container>
      </div>
    )
  }
}

export default App;