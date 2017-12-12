import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

jest.mock('../views/movies/containers/MovieContainer')
const MovieContainer = require('../views/movies/containers/MovieContainer').default;
MovieContainer.mockImplementation(() => null);

it('App snapshot', () => {
  const component = shallow(
    <App />
  );
  expect(component).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

