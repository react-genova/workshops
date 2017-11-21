import React, { Component } from 'react';

import Slider, { Slide } from './views/Slider';
import { SlideWelcome, SlideConclusions, SlideLOVS, SlideFarewell } from './views/Slides';

class App extends Component {
  render() {
    return (
        <Slider>
            <Slide title="Welcome" description="to react">
                <SlideWelcome />
            </Slide>
            <Slide title="All you need is L.O.V.S." description="List Of Valuable Suggestions">
                <SlideLOVS />
            </Slide>
            <Slide title="Conclusions" description="Yeah, interesting, so in short?">
                <SlideConclusions />
            </Slide>
            <Slide title="Farewell" description="although we're sure you will come back">
                <SlideFarewell />
            </Slide>
        </Slider>
    );
  }
}

export default App;
