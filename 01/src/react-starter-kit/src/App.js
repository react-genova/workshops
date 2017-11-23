import React, { Component } from 'react';

import Slider, { Slide } from './views/Slider';
import { 
    SlideWelcome, SlideConclusions, SlideLOVS, SlideFarewell,
    SlideReact, SlideDeveloperTools, SlideTesting, SlideRedux,
    SlideLibraries, SlideStudy, SlideLogo
} from './views/Slides';

class App extends Component {
  render() {
    return (
        <Slider>
            <SlideLogo />
            <Slide title="Welcome" description="to react">
                <SlideWelcome />
            </Slide>
            <Slide title="All you need is L.O.V.S." description="List Of Valuable Suggestions">
                <SlideLOVS />
            </Slide>
            <Slide title="All you need is L.O.V.S." description="Developer tools">
                <SlideDeveloperTools />
            </Slide>
            <Slide title="All you need is L.O.V.S." description="React">
                <SlideReact />
            </Slide>
            <Slide title="All you need is L.O.V.S." description="Testing">
                <SlideTesting />
            </Slide>
            <Slide title="All you need is L.O.V.S." description="Redux">
                <SlideRedux />
            </Slide>
            <Slide title="All you need is L.O.V.S." description="Libraries">
                <SlideLibraries />
            </Slide>    
            <Slide title="All you need is L.O.V.S." description="In-depth technological study">
                <SlideStudy />
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
