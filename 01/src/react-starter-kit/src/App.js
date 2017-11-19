import React, { Component } from 'react';

import Slider, { Slide } from './views/Slider';
import { SlideWelcome, SlideConclusions, SlideLOVS } from './views/Slides';

class App extends Component {
  render() {
    return (
      <Slider>
          <Slide title="Welcome" description="to madness">
              <SlideWelcome />
          </Slide>
          <Slide title="All you need is L.O.V.S." description="List Of Valuable Suggestions">
              <SlideLOVS />
          </Slide>
          <Slide title="Conclusions" description="Yeah, interesting, so in short?">
              <SlideConclusions />
          </Slide>
      </Slider>
    );
  }
}

export default App;
